<?php

namespace App\Services;

use App\Models\Scene;
use App\Models\Standpoint;
use RuntimeException;

class SceneImageProcessor
{
    public function __construct(private readonly PanoramaStorage $storage) {}

    public function process(Scene $scene): void
    {
        $this->apply($scene);
    }

    public function processStandpoint(Standpoint $standpoint): void
    {
        $this->apply($standpoint);
    }

    private function apply(Scene|Standpoint $record): void
    {
        if (blank($record->image_path)) {
            return;
        }

        [$local, $temporary] = $this->storage->readLocal($record->image_path);

        try {
            if (! is_file($local)) {
                throw new RuntimeException('全景图保存失败，请重试。');
            }

            $info = @getimagesize($local);
            $width = isset($info[0]) ? (int) $info[0] : null;
            $height = isset($info[1]) ? (int) $info[1] : null;
            $type = $info[2] ?? 0;
            $thumbPath = $this->thumbnailPath($record->image_path);
            $written = $this->writeThumbnail($local, $type, $thumbPath);

            $record->forceFill([
                'width' => $width,
                'height' => $height,
                'image_url' => $this->storage->url($record->image_path),
                'thumbnail_path' => $written ? $thumbPath : null,
                'thumbnail_url' => $written
                    ? $this->storage->url($thumbPath)
                    : $this->storage->url($record->image_path),
            ])->saveQuietly();
        } finally {
            if ($temporary && is_file($local)) {
                unlink($local);
            }
        }
    }

    private function thumbnailPath(string $imagePath): string
    {
        $directory = trim(str_replace('\\', '/', dirname($imagePath)), '.');
        $base = pathinfo($imagePath, PATHINFO_FILENAME);
        $relative = $base.'-thumb.jpg';

        return $directory !== '' ? $directory.'/'.$relative : $relative;
    }

    private function writeThumbnail(string $local, int $type, string $thumbPath): bool
    {
        if (! function_exists('imagecreatetruecolor')) {
            return false;
        }

        $source = match ($type) {
            IMAGETYPE_JPEG => @imagecreatefromjpeg($local),
            IMAGETYPE_PNG => @imagecreatefrompng($local),
            default => false,
        };

        if ($source === false) {
            return false;
        }

        $width = imagesx($source);
        $height = imagesy($source);
        $targetWidth = min(640, $width);
        $targetHeight = max(1, (int) round($height * ($targetWidth / max(1, $width))));
        $thumb = imagecreatetruecolor($targetWidth, $targetHeight);

        if ($thumb === false) {
            imagedestroy($source);

            return false;
        }

        imagecopyresampled($thumb, $source, 0, 0, 0, 0, $targetWidth, $targetHeight, $width, $height);
        $temporary = tempnam(sys_get_temp_dir(), 'thumb');
        $written = imagejpeg($thumb, $temporary, 82);
        imagedestroy($source);
        imagedestroy($thumb);

        if (! $written) {
            @unlink($temporary);

            return false;
        }

        $this->storage->put($thumbPath, (string) file_get_contents($temporary));
        @unlink($temporary);

        return true;
    }
}
