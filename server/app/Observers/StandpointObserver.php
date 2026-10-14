<?php

namespace App\Observers;

use App\Models\Scene;
use App\Models\Standpoint;
use App\Services\PanoramaStorage;
use App\Services\SceneImageProcessor;

class StandpointObserver
{
    public function __construct(
        private readonly PanoramaStorage $storage,
        private readonly SceneImageProcessor $processor,
    ) {}

    public function updating(Standpoint $standpoint): void
    {
        if (! $standpoint->isDirty('image_path')) {
            return;
        }

        $this->deleteOwnedFile(
            $standpoint->getOriginal('image_path'),
            $standpoint->getOriginal('thumbnail_path'),
            $standpoint,
        );
    }

    public function saved(Standpoint $standpoint): void
    {
        if (! $standpoint->wasRecentlyCreated && ! $standpoint->wasChanged('image_path')) {
            return;
        }

        if (blank($standpoint->image_path)) {
            return;
        }

        $this->processor->processStandpoint($standpoint);
    }

    public function deleted(Standpoint $standpoint): void
    {
        $this->deleteOwnedFile($standpoint->image_path, $standpoint->thumbnail_path, $standpoint);
    }

    private function deleteOwnedFile(?string $imagePath, ?string $thumbnailPath, Standpoint $standpoint): void
    {
        if (blank($imagePath)) {
            return;
        }

        $scenePath = $standpoint->scene?->image_path;

        if ($imagePath === $scenePath) {
            return;
        }

        $stillUsed = Standpoint::query()->where('image_path', $imagePath)->exists()
            || Scene::query()->where('image_path', $imagePath)->exists();

        if ($stillUsed) {
            return;
        }

        $this->storage->delete($imagePath);
        $this->storage->delete($thumbnailPath);
    }
}
