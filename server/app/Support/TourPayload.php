<?php

namespace App\Support;

use App\Models\Hotspot;
use App\Models\Scene;
use App\Models\Standpoint;
use App\Models\Tour;

final class TourPayload
{
    /**
     * @return array<string, mixed>
     */
    public static function forPlayer(Tour $tour): array
    {
        $tour->load(['scenes.standpoints.hotspots', 'scenes.hotspots']);
        $sceneIds = $tour->scenes->pluck('id')->all();
        $standpointIds = $tour->scenes
            ->flatMap(fn (Scene $scene) => $scene->standpoints->pluck('id'))
            ->all();
        $entry = $tour->scenes->firstWhere('is_entry', true) ?? $tour->scenes->first();

        return [
            'id' => $tour->id,
            'name' => $tour->name,
            'description' => $tour->description,
            'share_code' => $tour->share_code,
            'share_url' => $tour->shareUrl(),
            'status' => $tour->status->value,
            'entry_scene_id' => $entry?->id,
            'scenes' => $tour->scenes->values()->map(function (Scene $scene) use ($sceneIds, $standpointIds): array {
                $entryStandpoint = $scene->standpoints->firstWhere('is_entry', true) ?? $scene->standpoints->first();

                return [
                    'id' => $scene->id,
                    'name' => $scene->name,
                    'image_url' => $scene->image_url,
                    'thumbnail_url' => $scene->thumbnail_url ?: $scene->image_url,
                    'sort_order' => $scene->sort_order,
                    'is_entry' => (bool) $scene->is_entry,
                    'entry_standpoint_id' => $entryStandpoint?->id,
                    'standpoints' => $scene->standpoints->values()->map(
                        fn (Standpoint $standpoint): array => self::standpointPayload($scene, $standpoint, $sceneIds, $standpointIds)
                    )->all(),
                    'hotspots' => $scene->hotspots->map(
                        fn (Hotspot $hotspot): array => self::hotspotPayload($hotspot, $sceneIds, $standpointIds)
                    )->values()->all(),
                ];
            })->all(),
        ];
    }

    /**
     * @param  array<int, int>  $sceneIds
     * @param  array<int, int>  $standpointIds
     * @return array<string, mixed>
     */
    private static function standpointPayload(Scene $scene, Standpoint $standpoint, array $sceneIds, array $standpointIds): array
    {
        return [
            'id' => $standpoint->id,
            'scene_id' => $standpoint->scene_id,
            'name' => $standpoint->name,
            'image_url' => $standpoint->image_url ?: $scene->image_url,
            'thumbnail_url' => $standpoint->thumbnail_url ?: $standpoint->image_url ?: $scene->thumbnail_url ?: $scene->image_url,
            'position_x' => (float) $standpoint->position_x,
            'position_y' => (float) $standpoint->position_y,
            'yaw' => (float) $standpoint->yaw,
            'pitch' => (float) $standpoint->pitch,
            'sort_order' => $standpoint->sort_order,
            'is_entry' => (bool) $standpoint->is_entry,
            'hotspots' => $standpoint->hotspots->map(
                fn (Hotspot $hotspot): array => self::hotspotPayload($hotspot, $sceneIds, $standpointIds)
            )->values()->all(),
        ];
    }

    /**
     * @param  array<int, int>  $sceneIds
     * @param  array<int, int>  $standpointIds
     * @return array<string, mixed>
     */
    public static function hotspotPayload(Hotspot $hotspot, array $sceneIds, array $standpointIds): array
    {
        $kind = $hotspot->target_kind ?: ($hotspot->target_standpoint_id ? 'standpoint' : 'scene');
        $available = $kind === 'standpoint'
            ? $hotspot->target_standpoint_id !== null && in_array($hotspot->target_standpoint_id, $standpointIds, true)
            : $hotspot->target_scene_id !== null && in_array($hotspot->target_scene_id, $sceneIds, true);

        return [
            'id' => $hotspot->id,
            'title' => $hotspot->title,
            'label' => $hotspot->title,
            'yaw' => (float) $hotspot->yaw,
            'pitch' => (float) $hotspot->pitch,
            'standpoint_id' => $hotspot->standpoint_id,
            'target_kind' => $kind,
            'target_scene_id' => $hotspot->target_scene_id,
            'target_standpoint_id' => $hotspot->target_standpoint_id,
            'target_available' => $available,
        ];
    }
}
