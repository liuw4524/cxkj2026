<?php

namespace App\Http\Controllers;

use App\Enums\TourStatus;
use App\Models\Tour;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

class PlayerController extends Controller
{
    public function show(string $shareCode): View|Response
    {
        $tour = Tour::query()->where('share_code', $shareCode)->first();

        if (! $tour) {
            return response()->view('player.unavailable', [
                'title' => '作品不存在',
                'message' => '作品不存在',
                'hint' => '请检查分享链接是否正确。',
            ], 404);
        }

        if ($tour->status !== TourStatus::Published) {
            return response()->view('player.unavailable', [
                'title' => '作品未发布',
                'message' => '作品未发布',
                'hint' => '该漫游已下架，暂时无法播放。',
            ], 403);
        }

        $script = public_path('player/assets/player.js');
        $style = public_path('player/assets/player.css');

        if (! is_file($script) || ! is_file($style)) {
            return response()->view('player.unavailable', [
                'title' => '播放器未构建',
                'message' => '播放器资源未构建',
                'hint' => '请在 player 目录执行 npm install && npm run build。',
            ], 500);
        }

        return view('player.show', [
            'tour' => $tour,
        ]);
    }
}
