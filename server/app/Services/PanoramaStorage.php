<?php

namespace App\Services;

use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;

class PanoramaStorage
{
    public function diskName(): string
    {
        return (string) config('panorama.disk', 'public');
    }

    public function disk(): Filesystem
    {
        return Storage::disk($this->diskName());
    }

    public function url(?string $path): ?string
    {
        if (blank($path)) {
            return null;
        }

        return $this->disk()->url($path);
    }

    public function put(string $path, string $contents): void
    {
        $this->disk()->put($path, $contents, ['visibility' => 'public']);
    }

    public function delete(?string $path): void
    {
        if (blank($path)) {
            return;
        }

        $disk = $this->disk();

        if ($disk->exists($path)) {
            $disk->delete($path);
        }
    }

    /**
     * @return array{0: string, 1: bool} local path, and whether the caller should delete it
     */
    public function readLocal(string $path): array
    {
        $disk = $this->disk();

        if ($this->diskName() !== 'cos') {
            return [$disk->path($path), false];
        }

        $temporary = tempnam(sys_get_temp_dir(), 'pano');
        file_put_contents($temporary, $disk->get($path));

        return [$temporary, true];
    }
}
