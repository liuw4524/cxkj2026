<?php

namespace App\Support;

use App\Models\Scene;
use App\Models\Standpoint;
use App\Models\Tour;
use Illuminate\Validation\ValidationException;

final class HotspotLink
{
    /**
     * @param  array<string, mixed>  $input
     * @return array<string, mixed>
     */
    public static function attributes(Tour $tour, Scene $scene, array $input): array
    {
        $title = trim((string) ($input['title'] ?? ''));

        if (mb_strlen($title) > 40) {
            throw ValidationException::withMessages([
                'title' => '热点标题不能超过 40 个字。',
            ]);
        }

        $yaw = $input['yaw'] ?? null;
        $pitch = $input['pitch'] ?? null;

        if (! is_numeric($yaw) || ! is_numeric($pitch)) {
            throw ValidationException::withMessages([
                'yaw' => '请在全景上点击以放置热点。',
            ]);
        }

        $yaw = (float) $yaw;
        $pitch = (float) $pitch;

        if ($yaw < -6.2832 || $yaw > 6.2832 || $pitch < -1.5708 || $pitch > 1.5708) {
            throw ValidationException::withMessages([
                'yaw' => '热点位置超出全景范围。',
            ]);
        }

        $origin = self::origin($scene, $input['standpoint_id'] ?? null);
        $targetStandpointId = $input['target_standpoint_id'] ?? null;

        if ($targetStandpointId) {
            $target = Standpoint::query()
                ->whereHas('scene', fn ($query) => $query->where('tour_id', $tour->id))
                ->find($targetStandpointId);

            if (! $target) {
                throw ValidationException::withMessages([
                    'target_standpoint_id' => '目标站位不存在或已删除。',
                ]);
            }

            if ((int) $target->id === (int) $origin->id) {
                throw ValidationException::withMessages([
                    'target_standpoint_id' => '不能跳转到当前站位。',
                ]);
            }

            return [
                'title' => $title,
                'yaw' => $yaw,
                'pitch' => $pitch,
                'standpoint_id' => $origin->id,
                'target_kind' => 'standpoint',
                'target_standpoint_id' => $target->id,
                'target_scene_id' => $target->scene_id,
            ];
        }

        $targetSceneId = $input['target_scene_id'] ?? null;

        if (! $targetSceneId) {
            throw ValidationException::withMessages([
                'target_scene_id' => '请选择目标场景或目标站位。',
            ]);
        }

        $targetScene = Scene::query()->where('tour_id', $tour->id)->find($targetSceneId);

        if (! $targetScene) {
            throw ValidationException::withMessages([
                'target_scene_id' => '目标场景不存在或已删除。',
            ]);
        }

        if ((int) $targetScene->id === (int) $scene->id) {
            throw ValidationException::withMessages([
                'target_scene_id' => '目标场景不能是当前场景。',
            ]);
        }

        return [
            'title' => $title,
            'yaw' => $yaw,
            'pitch' => $pitch,
            'standpoint_id' => $origin->id,
            'target_kind' => 'scene',
            'target_standpoint_id' => null,
            'target_scene_id' => $targetScene->id,
        ];
    }

    private static function origin(Scene $scene, mixed $standpointId): Standpoint
    {
        if ($standpointId) {
            $origin = $scene->standpoints()->find($standpointId);

            if (! $origin) {
                throw ValidationException::withMessages([
                    'standpoint_id' => '站位不存在或已删除。',
                ]);
            }

            return $origin;
        }

        $origin = $scene->standpoints()->where('is_entry', true)->first()
            ?? $scene->standpoints()->orderBy('sort_order')->orderBy('id')->first();

        if (! $origin) {
            throw ValidationException::withMessages([
                'standpoint_id' => '请先为场景添加站位。',
            ]);
        }

        return $origin;
    }
}
