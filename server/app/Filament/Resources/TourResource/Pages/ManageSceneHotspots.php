<?php

namespace App\Filament\Resources\TourResource\Pages;

use App\Filament\Resources\TourResource;
use App\Models\Hotspot;
use App\Models\Scene;
use App\Models\Standpoint;
use App\Models\Tour;
use App\Support\HotspotLink;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\Page;
use Filament\Support\Enums\Width;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\Locked;

class ManageSceneHotspots extends Page
{
    protected static string $resource = TourResource::class;

    protected static ?string $title = '标注热点';

    protected ?string $subheading = '在全景上点击放置箭头。目标可以是另一个站位，也可以是整个场景。';

    protected string $view = 'filament.tours.manage-hotspots';

    protected Width|string|null $maxContentWidth = Width::Full;

    #[Locked]
    public Tour $tour;

    #[Locked]
    public Scene $scene;

    public ?int $editingId = null;

    public ?int $currentStandpointId = null;

    public ?float $yaw = null;

    public ?float $pitch = null;

    public string $hotspotTitle = '';

    public string $targetRef = '';

    public function mount(int|string $record, int|string|Scene $scene): void
    {
        $resolved = $this->resolveRecord($record);
        abort_unless($resolved instanceof Tour, 404);
        $this->tour = $resolved;

        if (! $scene instanceof Scene) {
            $scene = Scene::query()->findOrFail($scene);
        }

        abort_unless((int) $scene->tour_id === (int) $this->tour->id, 404);

        $this->scene = $scene->load('standpoints');
        $entry = $this->scene->standpoints->firstWhere('is_entry', true) ?? $this->scene->standpoints->first();
        $this->currentStandpointId = $entry?->id;
    }

    public function getHeading(): string
    {
        if (! isset($this->scene)) {
            return '标注热点';
        }

        return '标注热点 · '.$this->scene->name;
    }

    public function currentStandpoint(): ?Standpoint
    {
        if (! $this->currentStandpointId) {
            return null;
        }

        return $this->scene->standpoints()->find($this->currentStandpointId);
    }

    public function currentImageUrl(): ?string
    {
        $standpoint = $this->currentStandpoint();

        return $standpoint?->image_url ?: $this->scene->image_url;
    }

    /**
     * @return array<int, Standpoint>
     */
    public function sceneStandpoints(): array
    {
        return $this->scene->standpoints()->orderBy('sort_order')->orderBy('id')->get()->all();
    }

    /**
     * @return Collection<int, Standpoint>
     */
    public function targetStandpoints(): Collection
    {
        return Standpoint::query()
            ->with('scene')
            ->whereHas('scene', fn ($query) => $query->where('tour_id', $this->tour->id))
            ->get()
            ->sortBy([
                ['scene.sort_order', 'asc'],
                ['sort_order', 'asc'],
                ['id', 'asc'],
            ])
            ->values();
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
     * @return array<int, Hotspot>
     */
    public function visibleHotspots(): array
    {
        $query = $this->scene->hotspots()->orderBy('id');

        if ($this->currentStandpointId) {
            $query->where('standpoint_id', $this->currentStandpointId);
        }

        return $query->get()->all();
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function markerPayload(): array
    {
        return collect($this->visibleHotspots())
            ->map(fn (Hotspot $hotspot): array => [
                'id' => $hotspot->id,
                'title' => $hotspot->title !== '' ? $hotspot->title : ($hotspot->target_kind === 'standpoint' ? '向前走' : '前往'),
                'yaw' => (float) $hotspot->yaw,
                'pitch' => (float) $hotspot->pitch,
                'target_scene_id' => $hotspot->target_scene_id,
                'target_standpoint_id' => $hotspot->target_standpoint_id,
                'target_kind' => $hotspot->target_kind,
            ])
            ->all();
    }

    public function selectStandpoint(int $id): void
    {
        abort_unless($this->scene->standpoints()->whereKey($id)->exists(), 404);
        $this->currentStandpointId = $id;
        $this->resetDraft();
        $this->dispatch('standpoint-changed', imageUrl: $this->currentImageUrl(), hotspots: $this->markerPayload());
    }

    public function prepareNew(float $yaw, float $pitch): void
    {
        $this->editingId = null;
        $this->yaw = round($yaw, 6);
        $this->pitch = round($pitch, 6);
        $this->hotspotTitle = '';
        $this->targetRef = '';
        $this->resetErrorBag();
    }

    public function edit(int $id): void
    {
        $hotspot = $this->scene->hotspots()->findOrFail($id);
        $this->editingId = $hotspot->id;
        $this->currentStandpointId = $hotspot->standpoint_id ?: $this->currentStandpointId;
        $this->yaw = (float) $hotspot->yaw;
        $this->pitch = (float) $hotspot->pitch;
        $this->hotspotTitle = $hotspot->title;
        $this->targetRef = $hotspot->target_kind === 'standpoint' && $hotspot->target_standpoint_id
            ? 'standpoint:'.$hotspot->target_standpoint_id
            : ($hotspot->target_scene_id ? 'scene:'.$hotspot->target_scene_id : '');
        $this->resetErrorBag();
    }

    public function save(): void
    {
        $parsed = $this->parseTarget($this->targetRef);

        if ($parsed === null) {
            $this->addError('targetRef', '请选择跳转目标。');

            return;
        }

        try {
            $attributes = HotspotLink::attributes($this->tour, $this->scene, [
                'title' => $this->hotspotTitle,
                'yaw' => $this->yaw,
                'pitch' => $this->pitch,
                'standpoint_id' => $this->currentStandpointId,
                'target_standpoint_id' => $parsed['kind'] === 'standpoint' ? $parsed['id'] : null,
                'target_scene_id' => $parsed['kind'] === 'scene' ? $parsed['id'] : null,
            ]);
        } catch (ValidationException $exception) {
            foreach ($exception->errors() as $field => $messages) {
                $mapped = match ($field) {
                    'title' => 'hotspotTitle',
                    'target_scene_id', 'target_standpoint_id' => 'targetRef',
                    default => $field,
                };
                $this->addError($mapped, $messages[0]);
            }

            return;
        }

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
            $this->resetDraft();
        }

        $this->scene->unsetRelation('hotspots');
        Notification::make()->success()->title('热点已删除')->send();
        $this->dispatch('hotspots-updated', hotspots: $this->markerPayload());
    }

    public function targetSummary(Hotspot $hotspot): string
    {
        if ($hotspot->target_kind === 'standpoint') {
            $target = $hotspot->targetStandpoint;

            if (! $target) {
                return '目标站位已不存在';
            }

            $sceneName = $target->scene?->name;

            return $sceneName ? '走到 '.$sceneName.' · '.$target->name : '走到 '.$target->name;
        }

        if (! $hotspot->target_scene_id || ! $hotspot->targetScene) {
            return '目标场景已不存在';
        }

        return '跳到场景 '.$hotspot->targetScene->name;
    }

    /**
     * @return array{kind: string, id: int}|null
     */
    private function parseTarget(string $ref): ?array
    {
        if (str_starts_with($ref, 'standpoint:')) {
            return ['kind' => 'standpoint', 'id' => (int) substr($ref, 11)];
        }

        if (str_starts_with($ref, 'scene:')) {
            return ['kind' => 'scene', 'id' => (int) substr($ref, 6)];
        }

        return null;
    }

    private function resetDraft(): void
    {
        $this->editingId = null;
        $this->hotspotTitle = '';
        $this->targetRef = '';
        $this->yaw = null;
        $this->pitch = null;
        $this->resetErrorBag();
    }
}
