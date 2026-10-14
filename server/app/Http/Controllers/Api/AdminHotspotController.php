<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hotspot;
use App\Models\Scene;
use App\Models\Tour;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

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

    /**
     * @return array{title: string, target_scene_id: int, yaw: float, pitch: float}
     */
    private function ensureScene(Tour $tour, Scene $scene): void
    {
        abort_unless($scene->tour_id === $tour->id, 404);
    }

    private function validated(Request $request, Tour $tour, Scene $scene): array
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:40'],
            'target_scene_id' => ['required', 'integer'],
            'yaw' => ['required', 'numeric', 'between:-6.2832,6.2832'],
            'pitch' => ['required', 'numeric', 'between:-1.5708,1.5708'],
        ], [
            'title.required' => '请填写热点标题。',
            'title.max' => '热点标题不能超过 40 个字。',
            'target_scene_id.required' => '请选择目标场景。',
            'yaw.required' => '请在全景上点击以放置热点。',
            'pitch.required' => '请在全景上点击以放置热点。',
        ]);

        $target = Scene::query()
            ->where('tour_id', $tour->id)
            ->find($data['target_scene_id']);

        if (! $target) {
            throw ValidationException::withMessages([
                'target_scene_id' => '目标场景不存在或已删除。',
            ]);
        }

        if ($target->id === $scene->id) {
            throw ValidationException::withMessages([
                'target_scene_id' => '目标场景不能是当前场景。',
            ]);
        }

        return [
            'title' => $data['title'],
            'target_scene_id' => $target->id,
            'yaw' => (float) $data['yaw'],
            'pitch' => (float) $data['pitch'],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(Hotspot $hotspot): array
    {
        return [
            'id' => $hotspot->id,
            'scene_id' => $hotspot->scene_id,
            'title' => $hotspot->title,
            'yaw' => (float) $hotspot->yaw,
            'pitch' => (float) $hotspot->pitch,
            'target_scene_id' => $hotspot->target_scene_id,
            'target_available' => $hotspot->target_scene_id !== null,
        ];
    }
}
