<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Scene;
use App\Models\Standpoint;
use App\Models\Tour;
use App\Rules\PanoramaUploadRule;
use App\Support\PanoramaLimits;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AdminStandpointController extends Controller
{
    public function store(Request $request, Tour $tour, Scene $scene): JsonResponse
    {
        $this->ensureScene($tour, $scene);
        $standpoint = $scene->standpoints()->create($this->validated($request, $tour));

        return response()->json($this->payload($standpoint->refresh(), $scene), 201);
    }

    public function update(Request $request, Tour $tour, Standpoint $standpoint): JsonResponse
    {
        $scene = $this->sceneFor($tour, $standpoint);
        $standpoint->fill($this->validated($request, $tour, updating: true))->save();

        return response()->json($this->payload($standpoint->refresh(), $scene));
    }

    public function destroy(Tour $tour, Standpoint $standpoint): JsonResponse
    {
        $scene = $this->sceneFor($tour, $standpoint);

        if ($scene->standpoints()->count() <= 1) {
            throw ValidationException::withMessages([
                'standpoint' => '至少保留一个站位。',
            ]);
        }

        $standpoint->delete();

        return response()->json(['message' => '站位已删除']);
    }

    private function ensureScene(Tour $tour, Scene $scene): void
    {
        abort_unless($scene->tour_id === $tour->id, 404);
    }

    private function sceneFor(Tour $tour, Standpoint $standpoint): Scene
    {
        $scene = $standpoint->scene;
        abort_unless($scene && $scene->tour_id === $tour->id, 404);

        return $scene;
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request, Tour $tour, bool $updating = false): array
    {
        $data = $request->validate([
            'name' => [$updating ? 'sometimes' : 'required', 'string', 'max:40'],
            'position_x' => ['sometimes', 'numeric', 'between:-500,500'],
            'position_y' => ['sometimes', 'numeric', 'between:-500,500'],
            'yaw' => ['sometimes', 'numeric', 'between:-6.2832,6.2832'],
            'pitch' => ['sometimes', 'numeric', 'between:-1.5708,1.5708'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_entry' => ['sometimes', 'boolean'],
            'image' => ['sometimes', 'nullable', new PanoramaUploadRule],
        ], [
            'name.required' => '请填写站位名称。',
            'name.max' => '站位名称不能超过 40 个字。',
        ]);

        $attributes = [];

        foreach (['name', 'position_x', 'position_y', 'yaw', 'pitch', 'sort_order', 'is_entry'] as $field) {
            if (array_key_exists($field, $data)) {
                $attributes[$field] = $data[$field];
            }
        }

        if ($request->hasFile('image')) {
            $attributes['image_path'] = $request->file('image')->storePublicly(
                'panoramas/'.$tour->id,
                config('panorama.disk'),
            );
        }

        return $attributes;
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(Standpoint $standpoint, Scene $scene): array
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
            'width' => $standpoint->width,
            'height' => $standpoint->height,
            'warning' => PanoramaLimits::edgeWarning($standpoint->width, $standpoint->height),
        ];
    }
}
