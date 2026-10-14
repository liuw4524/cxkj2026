<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hotspot;
use App\Models\Scene;
use App\Models\Tour;
use App\Support\HotspotLink;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminHotspotController extends Controller
{
    public function store(Request $request, Tour $tour, Scene $scene): JsonResponse
    {
        $this->ensureScene($tour, $scene);
        $hotspot = $scene->hotspots()->create($this->validated($request, $tour, $scene));

        return response()->json($this->payload($hotspot), 201);
    }

    public function update(Request $request, Tour $tour, Hotspot $hotspot): JsonResponse
    {
        $scene = $hotspot->scene;
        abort_unless($scene && $scene->tour_id === $tour->id, 404);
        $hotspot->fill($this->validated($request, $tour, $scene))->save();

        return response()->json($this->payload($hotspot->refresh()));
    }

    public function destroy(Tour $tour, Hotspot $hotspot): JsonResponse
    {
        $scene = $hotspot->scene;
        abort_unless($scene && $scene->tour_id === $tour->id, 404);
        $hotspot->delete();

        return response()->json(['message' => '热点已删除']);
    }

    private function ensureScene(Tour $tour, Scene $scene): void
    {
        abort_unless($scene->tour_id === $tour->id, 404);
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request, Tour $tour, Scene $scene): array
    {
        $data = $request->validate([
            'title' => ['nullable', 'string', 'max:40'],
            'target_scene_id' => ['nullable', 'integer', 'required_without:target_standpoint_id'],
            'target_standpoint_id' => ['nullable', 'integer'],
            'standpoint_id' => ['nullable', 'integer'],
            'yaw' => ['required', 'numeric', 'between:-6.2832,6.2832'],
            'pitch' => ['required', 'numeric', 'between:-1.5708,1.5708'],
        ], [
            'title.max' => '热点标题不能超过 40 个字。',
            'target_scene_id.required_without' => '请选择目标场景或目标站位。',
            'yaw.required' => '请在全景上点击以放置热点。',
            'pitch.required' => '请在全景上点击以放置热点。',
        ]);

        return HotspotLink::attributes($tour, $scene, $data);
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(Hotspot $hotspot): array
    {
        $kind = $hotspot->target_kind ?: 'scene';

        return [
            'id' => $hotspot->id,
            'scene_id' => $hotspot->scene_id,
            'standpoint_id' => $hotspot->standpoint_id,
            'title' => $hotspot->title,
            'label' => $hotspot->title,
            'yaw' => (float) $hotspot->yaw,
            'pitch' => (float) $hotspot->pitch,
            'target_kind' => $kind,
            'target_scene_id' => $hotspot->target_scene_id,
            'target_standpoint_id' => $hotspot->target_standpoint_id,
            'target_available' => $kind === 'standpoint'
                ? $hotspot->target_standpoint_id !== null
                : $hotspot->target_scene_id !== null,
        ];
    }
}
