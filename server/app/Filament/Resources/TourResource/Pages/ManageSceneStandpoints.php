<?php

namespace App\Filament\Resources\TourResource\Pages;

use App\Filament\Resources\TourResource;
use App\Models\Scene;
use App\Models\Tour;
use App\Rules\PanoramaUploadRule;
use App\Support\PanoramaLimits;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\Page;
use Filament\Support\Enums\Width;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\Locked;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Livewire\WithFileUploads;

class ManageSceneStandpoints extends Page
{
    use WithFileUploads;

    protected static string $resource = TourResource::class;

    protected static ?string $title = '管理站位';

    protected ?string $subheading = '同一场景里可以放多个站位。平面坐标用来计算走动方向，不是三维模型。';

    protected string $view = 'filament.tours.manage-standpoints';

    protected Width|string|null $maxContentWidth = Width::Full;

    #[Locked]
    public Tour $tour;

    #[Locked]
    public Scene $scene;

    public ?int $editingId = null;

    public string $standpointName = '';

    public string $positionX = '0';

    public string $positionY = '0';

    public string $yaw = '0';

    public string $pitch = '0';

    public bool $isEntry = false;

    public ?TemporaryUploadedFile $panorama = null;

    public function mount(int|string $record, int|string|Scene $scene): void
    {
        $resolved = $this->resolveRecord($record);
        abort_unless($resolved instanceof Tour, 404);
        $this->tour = $resolved;

        if (! $scene instanceof Scene) {
            $scene = Scene::query()->findOrFail($scene);
        }

        abort_unless((int) $scene->tour_id === (int) $this->tour->id, 404);
        $this->scene = $scene;
        $this->prepareNew();
    }

    public function getHeading(): string
    {
        if (! isset($this->scene)) {
            return '管理站位';
        }

        return '管理站位 · '.$this->scene->name;
    }

    public function prepareNew(): void
    {
        $this->editingId = null;
        $this->standpointName = '';
        $this->positionX = '0';
        $this->positionY = '0';
        $this->yaw = '0';
        $this->pitch = '0';
        $this->isEntry = $this->scene->standpoints()->count() === 0;
        $this->panorama = null;
        $this->resetErrorBag();
    }

    public function edit(int $id): void
    {
        $standpoint = $this->scene->standpoints()->findOrFail($id);
        $this->editingId = $standpoint->id;
        $this->standpointName = $standpoint->name;
        $this->positionX = $this->number($standpoint->position_x);
        $this->positionY = $this->number($standpoint->position_y);
        $this->yaw = $this->number($standpoint->yaw);
        $this->pitch = $this->number($standpoint->pitch);
        $this->isEntry = (bool) $standpoint->is_entry;
        $this->panorama = null;
        $this->resetErrorBag();
    }

    public function save(): void
    {
        $data = $this->validate([
            'standpointName' => ['required', 'string', 'max:40'],
            'positionX' => ['required', 'numeric', 'between:-500,500'],
            'positionY' => ['required', 'numeric', 'between:-500,500'],
            'yaw' => ['required', 'numeric', 'between:-6.2832,6.2832'],
            'pitch' => ['required', 'numeric', 'between:-1.5708,1.5708'],
            'isEntry' => ['boolean'],
            'panorama' => ['nullable', 'file'],
        ], [
            'standpointName.required' => '请填写站位名称。',
            'standpointName.max' => '站位名称不能超过 40 个字。',
            'positionX.required' => '请填写平面坐标 X。',
            'positionY.required' => '请填写平面坐标 Y。',
            'yaw.required' => '请填写到达朝向。',
            'pitch.required' => '请填写到达俯仰。',
        ], [
            'standpointName' => '站位名称',
            'positionX' => '平面坐标 X',
            'positionY' => '平面坐标 Y',
            'yaw' => '到达朝向',
            'pitch' => '到达俯仰',
            'panorama' => '全景图',
        ]);

        if ($this->panorama) {
            $rule = new PanoramaUploadRule;
            $failed = false;
            $rule->validate('panorama', $this->panorama, function (string $message) use (&$failed): void {
                $failed = true;
                $this->addError('panorama', $message);
            });

            if ($failed) {
                return;
            }
        }

        $attributes = [
            'name' => $data['standpointName'],
            'position_x' => $data['positionX'],
            'position_y' => $data['positionY'],
            'yaw' => $data['yaw'],
            'pitch' => $data['pitch'],
            'is_entry' => (bool) ($data['isEntry'] ?? false),
        ];

        if ($this->panorama) {
            $attributes['image_path'] = $this->panorama->storePublicly(
                'panoramas/'.$this->tour->id,
                config('panorama.disk'),
            );
        }

        if ($this->editingId) {
            $standpoint = $this->scene->standpoints()->findOrFail($this->editingId);
            $standpoint->fill($attributes)->save();
        } else {
            $standpoint = $this->scene->standpoints()->create($attributes);
            $this->editingId = $standpoint->id;
        }

        $this->panorama = null;
        $standpoint->refresh();
        $warning = PanoramaLimits::edgeWarning($standpoint->width, $standpoint->height);
        $notice = Notification::make()->success()->title('站位已保存');

        if ($warning) {
            $notice->body($warning);
        }

        $notice->send();
    }

    public function markEntry(int $id): void
    {
        $standpoint = $this->scene->standpoints()->findOrFail($id);
        $standpoint->markAsEntry();
        $this->isEntry = $this->editingId === $id;
        Notification::make()->success()->title('已设为初始站位')->send();
    }

    public function deleteStandpoint(int $id): void
    {
        if ($this->scene->standpoints()->count() <= 1) {
            Notification::make()->danger()->title('无法删除')->body('至少保留一个站位。')->send();

            return;
        }

        $standpoint = $this->scene->standpoints()->findOrFail($id);

        try {
            $standpoint->delete();
        } catch (ValidationException $exception) {
            Notification::make()->danger()->title('无法删除')->body($exception->getMessage())->send();

            return;
        }

        if ($this->editingId === $id) {
            $this->prepareNew();
        }

        Notification::make()->success()->title('站位已删除')->body('指向它的热点会提示「目标站位已不存在」，播放页不会中断。')->send();
    }

    private function number(float|int|string|null $value): string
    {
        if ($value === null || $value === '') {
            return '0';
        }

        return rtrim(rtrim(number_format((float) $value, 3, '.', ''), '0'), '.') ?: '0';
    }
}
