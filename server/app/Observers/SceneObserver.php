<?php

namespace App\Observers;

use App\Models\Scene;
use App\Services\PanoramaStorage;
use App\Services\SceneImageProcessor;

class SceneObserver
{
    public function __construct(
        private readonly PanoramaStorage $storage,
        private readonly SceneImageProcessor $processor,
    ) {}

    public function updating(Scene $scene): void
    {
        if (! $scene->isDirty('image_path')) {
            return;
        }

        $this->storage->delete($scene->getOriginal('image_path'));
        $this->storage->delete($scene->getOriginal('thumbnail_path'));
    }

    public function saved(Scene $scene): void
    {
        if (! $scene->wasRecentlyCreated && ! $scene->wasChanged('image_path')) {
            return;
        }

        $this->processor->process($scene);
    }

    public function deleted(Scene $scene): void
    {
        $this->storage->delete($scene->image_path);
        $this->storage->delete($scene->thumbnail_path);
    }
}
