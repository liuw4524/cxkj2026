<?php

namespace App\Support;

use App\Models\Hotspot;
use App\Models\Scene;
use App\Models\Tour;

final class TourPayload
{
    /**
     * @return array<string, mixed>
     */
    public static function forPlayer(Tour $tour): array
    {
        $tour->load(['scenes.hotspots']);
        $sceneIds = $tour->scenes->pluck('id')->all();
        $entry = $tour->scenes->firstWhere('is_entry', true) ?? $tour->scenes->first();

        return [
            'id' => $tour->id,
            'name' => $tour->name,
            'description' => $tour->description,
            'share_code' => $tour->share_code,
            'share_url' => $tour->shareUrl(),
            'status' => $tour->status->value,
            'entry_scene_id' => $entry?->id,
            'scenes' => $tour->scenes->values()->map(fn (Scene $scene): array => [
                'id' => $scene->id,
                'name' => $scene->name,
                'image_url' => $scene->image_url,
                'thumbnail_url' => $scene->thumbnail_url ?: $scene->image_url,
                'sort_order' => $scene->sort_order,
                'is_entry' => (bool) $scene->is_entry,
                'hotspots' => $scene->hotspots->map(fn (Hotspot $hotspot): array => [
                    'id' => $hotspot->id,
                    'title' => $hotspot->title,
                    'yaw' => (float) $hotspot->yaw,
                    'pitch' => (float) $hotspot->pitch,
                    'target_scene_id' => $hotspot->target_scene_id,
                    'target_available' => $hotspot->target_scene_id !== null
                        && in_array($hotspot->target_scene_id, $sceneIds, true),
                ])->values()->all(),
            ])->all(),
        ];
    }
}
