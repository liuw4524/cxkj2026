<?php

namespace App\Console\Commands;

use App\Enums\TourStatus;
use App\Models\Tour;
use App\Services\PanoramaStorage;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class DemoTourCommand extends Command
{
    protected $signature = 'tour:demo';

    protected $description = '生成一条包含三个场景、客厅四个站位和向前走热点的演示漫游';

    public function handle(PanoramaStorage $storage): int
    {
        $tour = Tour::query()->firstOrNew(['share_code' => 'demo-tour']);
        $tour->fill([
            'name' => '演示样板间',
            'description' => '本地演示作品。客厅里可以连续向前走三个站位，也可以用缩略图换到卧室和厨房。',
            'status' => TourStatus::Published,
        ]);
        $tour->save();
        $tour->scenes()->get()->each->delete();

        $rooms = [
            ['客厅', 214, 176, 132, 0.35, '去卧室'],
            ['卧室', 96, 140, 176, -0.55, '去厨房'],
            ['厨房', 120, 158, 112, 0.2, '回客厅'],
        ];

        $scenes = [];

        foreach ($rooms as $index => [$name, $red, $green, $blue]) {
            $temporary = tempnam(sys_get_temp_dir(), 'demo');
            $this->paint($temporary, $red, $green, $blue, 'ROOM-'.($index + 1));
            $path = 'panoramas/'.$tour->id.'/'.Str::uuid().'.jpg';
            $storage->put($path, (string) file_get_contents($temporary));
            @unlink($temporary);

            $scenes[] = $tour->scenes()->create([
                'name' => $name,
                'image_path' => $path,
                'sort_order' => $index,
                'is_entry' => $index === 0,
            ]);
        }

        $living = $scenes[0];
        $living->standpoints()->get()->each->delete();
        $steps = [
            ['门口', 0.0, 214, 176, 132],
            ['茶几', 1.6, 186, 164, 120],
            ['窗边', 3.2, 150, 170, 150],
            ['阳台', 4.8, 120, 158, 176],
        ];
        $standpoints = [];

        foreach ($steps as $index => [$name, $y, $red, $green, $blue]) {
            $temporary = tempnam(sys_get_temp_dir(), 'step');
            $this->paintStep($temporary, $red, $green, $blue, $name);
            $path = 'panoramas/'.$tour->id.'/'.Str::uuid().'.jpg';
            $storage->put($path, (string) file_get_contents($temporary));
            @unlink($temporary);

            $standpoints[] = $living->standpoints()->create([
                'name' => $name,
                'image_path' => $path,
                'position_x' => 0,
                'position_y' => $y,
                'yaw' => 0,
                'pitch' => 0,
                'sort_order' => $index,
                'is_entry' => $index === 0,
            ]);
        }

        foreach ($standpoints as $index => $standpoint) {
            if (! isset($standpoints[$index + 1])) {
                break;
            }

            $living->hotspots()->create([
                'standpoint_id' => $standpoint->id,
                'title' => '向前走',
                'yaw' => 0,
                'pitch' => -0.42,
                'target_kind' => 'standpoint',
                'target_standpoint_id' => $standpoints[$index + 1]->id,
                'target_scene_id' => $living->id,
            ]);
        }

        foreach ($rooms as $index => $room) {
            $target = $scenes[($index + 1) % count($scenes)];
            $scenes[$index]->hotspots()->create([
                'title' => $room[5],
                'yaw' => $room[4],
                'pitch' => -0.12,
                'target_scene_id' => $target->id,
            ]);
        }

        $this->info('演示漫游已就绪');
        $this->line('分享链接：'.$tour->shareUrl());
        $this->line('接口：'.url('/api/tours/'.$tour->share_code));
        $this->line('小程序路径：/pages/webview/webview?code='.$tour->share_code);

        return self::SUCCESS;
    }

    private function paint(string $path, int $red, int $green, int $blue, string $label): void
    {
        $width = 1600;
        $height = 800;
        $image = imagecreatetruecolor($width, $height);
        $background = imagecolorallocate($image, $red, $green, $blue);
        imagefilledrectangle($image, 0, 0, $width, $height, $background);
        $horizon = imagecolorallocate($image, max(0, $red - 30), max(0, $green - 24), max(0, $blue - 20));
        imagefilledrectangle($image, 0, (int) ($height * 0.5), $width, $height, $horizon);
        $window = imagecolorallocate($image, 255, 248, 235);
        imagefilledrectangle($image, 180, 180, 460, 520, $window);
        imagefilledrectangle($image, 1080, 160, 1420, 540, $window);
        $ink = imagecolorallocate($image, 30, 24, 18);
        imagestring($image, 5, 48, 48, $label, $ink);
        imagejpeg($image, $path, 86);
        imagedestroy($image);
    }

    private function paintStep(string $path, int $red, int $green, int $blue, string $label): void
    {
        $width = 1600;
        $height = 800;
        $image = imagecreatetruecolor($width, $height);
        $background = imagecolorallocate($image, $red, $green, $blue);
        imagefilledrectangle($image, 0, 0, $width, $height, $background);
        $floor = imagecolorallocate($image, max(0, $red - 40), max(0, $green - 28), max(0, $blue - 24));
        imagefilledrectangle($image, 0, (int) ($height * 0.55), $width, $height, $floor);
        $window = imagecolorallocate($image, 255, 248, 235);
        $shift = (int) (crc32($label) % 180);
        imagefilledrectangle($image, 220 + $shift, 150, 520 + $shift, 430, $window);
        $arrow = imagecolorallocate($image, 15, 118, 110);
        imagefilledpolygon($image, [
            800, 500,
            760, 580,
            788, 580,
            788, 660,
            812, 660,
            812, 580,
            840, 580,
        ], $arrow);
        $ink = imagecolorallocate($image, 30, 24, 18);
        imagestring($image, 5, 48, 48, $label, $ink);
        imagejpeg($image, $path, 86);
        imagedestroy($image);
    }
}
