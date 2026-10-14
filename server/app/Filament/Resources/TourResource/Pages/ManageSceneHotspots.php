<?php

namespace App\Filament\Resources\TourResource\Pages;

use App\Filament\Resources\TourResource;
use App\Models\Hotspot;
use App\Models\Scene;
use App\Models\Tour;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\Page;
use Filament\Support\Enums\Width;
use Livewire\Attributes\Locked;

class ManageSceneHotspots extends Page
{
    protected static string $resource = TourResource::class;

    protected static ?string $title = '标注热点';

    protected ?string $subheading = '在全景上点击放置热点，填写标题和要跳转的场景。';

    protected string $view = 'filament.tours.manage-hotspots';

    protected Width|string|null $maxContentWidth = Width::Full;

    #[Locked]
    public Tour $tour;

    #[Locked]
    public Scene $scene;

    public ?int $editingId = null;

    public ?float $yaw = null;

    public ?float $pitch = null;

    public string $hotspotTitle = '';

    public ?int $targetSceneId = null;

    public function mount(int|string $record, int|string|Scene $scene): void
    {
        $resolved = $this->resolveRecord($record);
        abort_unless($resolved instanceof Tour, 404);
        $this->tour = $resolved;

        if (! $scene instanceof Scene) {
            $scene = Scene::query()->findOrFail($scene);
        }

        abort_unless((int) $scene->tour_id === (int) $this->tour->id, 404);

        $this->scene = $scene->load('hotspots');
    }

    public function getHeading(): string
    {
        if (! isset($this->scene)) {
            return '标注热点';
        }

        return '标注热点 · '.$this->scene->name;
    }

    /**
     * @return array<int, Scene>
     */
    public function targetScenes(): array
    {
        return Scene::query()
            ->where('tour_id', $this->tour->id)
            ->whereKeyNot($this->scene->id)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->all();
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function markerPayload(): array
    {
        return $this->scene->hotspots()
            ->orderBy('id')
            ->get()
            ->map(fn (Hotspot $hotspot): array => [
                'id' => $hotspot->id,
                'title' => $hotspot->title,
                'yaw' => (float) $hotspot->yaw,
                'pitch' => (float) $hotspot->pitch,
                'target_scene_id' => $hotspot->target_scene_id,
            ])
            ->all();
    }

    public function prepareNew(float $yaw, float $pitch): void
    {
        $this->editingId = null;
        $this->yaw = round($yaw, 6);
        $this->pitch = round($pitch, 6);
        $this->hotspotTitle = '';
        $this->targetSceneId = null;
        $this->resetErrorBag();
    }

    public function edit(int $id): void
    {
        $hotspot = $this->scene->hotspots()->findOrFail($id);
        $this->editingId = $hotspot->id;
        $this->yaw = (float) $hotspot->yaw;
        $this->pitch = (float) $hotspot->pitch;
        $this->hotspotTitle = $hotspot->title;
        $this->targetSceneId = $hotspot->target_scene_id;
        $this->resetErrorBag();
    }

    public function save(): void
    {
        $data = $this->validate([
            'hotspotTitle' => ['required', 'string', 'max:40'],
            'targetSceneId' => ['required', 'integer'],
            'yaw' => ['required', 'numeric', 'between:-6.2832,6.2832'],
            'pitch' => ['required', 'numeric', 'between:-1.5708,1.5708'],
        ], [
            'hotspotTitle.required' => '请填写热点标题。',
            'hotspotTitle.max' => '热点标题不能超过 40 个字。',
            'targetSceneId.required' => '请选择目标场景。',
            'yaw.required' => '请在全景上点击以放置热点。',
            'pitch.required' => '请在全景上点击以放置热点。',
        ], [
            'hotspotTitle' => '标题',
            'targetSceneId' => '目标场景',
            'yaw' => '水平角',
            'pitch' => '垂直角',
        ]);

        $target = Scene::query()
            ->where('tour_id', $this->tour->id)
            ->find($data['targetSceneId']);

        if (! $target) {
            $this->addError('targetSceneId', '目标场景不存在或已删除。');

            return;
        }

        if ($target->id === $this->scene->id) {
            $this->addError('targetSceneId', '目标场景不能是当前场景。');

            return;
        }

        $attributes = [
            'title' => $data['hotspotTitle'],
            'target_scene_id' => $target->id,
            'yaw' => $data['yaw'],
            'pitch' => $data['pitch'],
        ];

        if ($this->editingId) {
            $hotspot = $this->scene->hotspots()->findOrFail($this->editingId);
            $hotspot->update($attributes);
        } else {
            $hotspot = $this->scene->hotspots()->create($attributes);
            $this->editingId = $hotspot->id;
        }

        $this->scene->unsetRelation('hotspots');
        Notification::make()->success()->title('热点已保存')->send();
        $this->dispatch('hotspots-updated', hotspots: $this->markerPayload());
    }

    public function deleteHotspot(int $id): void
    {
        $this->scene->hotspots()->whereKey($id)->delete();

        if ($this->editingId === $id) {
            $this->editingId = null;
            $this->hotspotTitle = '';
            $this->targetSceneId = null;
            $this->yaw = null;
            $this->pitch = null;
        }

        $this->scene->unsetRelation('hotspots');
        Notification::make()->success()->title('热点已删除')->send();
        $this->dispatch('hotspots-updated', hotspots: $this->markerPayload());
    }
}
