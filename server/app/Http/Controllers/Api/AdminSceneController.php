<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Scene;
use App\Models\Tour;
use App\Rules\PanoramaUploadRule;
use App\Support\PanoramaLimits;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminSceneController extends Controller
{
    public function store(Request $request, Tour $tour): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:40'],
            'image' => ['required', new PanoramaUploadRule],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ], [
            'name.required' => '请填写场景名称。',
            'name.max' => '场景名称不能超过 40 个字。',
            'image.required' => '请上传全景图。',
        ]);

        $path = $request->file('image')->storePublicly(
            'panoramas/'.$tour->id,
            config('panorama.disk'),
        );

        $scene = $tour->scenes()->create([
            'name' => $data['name'],
            'image_path' => $path,
            'sort_order' => $data['sort_order'] ?? null,
        ]);

        return response()->json($this->payload($scene->refresh()), 201);
    }

    public function update(Request $request, Tour $tour, Scene $scene): JsonResponse
    {
        $this->ensureScene($tour, $scene);

        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:40'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
            'image' => ['sometimes', new PanoramaUploadRule],
        ], [
            'name.required' => '请填写场景名称。',
        ]);

        if ($request->hasFile('image')) {
            $scene->image_path = $request->file('image')->storePublicly(
                'panoramas/'.$tour->id,
                config('panorama.disk'),
            );
        }

        if (array_key_exists('name', $data)) {
            $scene->name = $data['name'];
        }

        if (array_key_exists('sort_order', $data)) {
            $scene->sort_order = $data['sort_order'];
        }

        $scene->save();

        return response()->json($this->payload($scene->refresh()));
    }

    public function destroy(Tour $tour, Scene $scene): JsonResponse
    {
        $this->ensureScene($tour, $scene);
        $scene->delete();

        return response()->json(['message' => '场景已删除']);
    }

    public function entry(Tour $tour, Scene $scene): JsonResponse
    {
        $this->ensureScene($tour, $scene);
        $scene->markAsEntry();

        return response()->json($this->payload($scene->refresh()));
    }

    private function ensureScene(Tour $tour, Scene $scene): void
    {
        abort_unless($scene->tour_id === $tour->id, 404);
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(Scene $scene): array
    {
        return [
            'id' => $scene->id,
            'tour_id' => $scene->tour_id,
            'name' => $scene->name,
            'image_url' => $scene->image_url,
            'thumbnail_url' => $scene->thumbnail_url ?: $scene->image_url,
            'sort_order' => $scene->sort_order,
            'is_entry' => (bool) $scene->is_entry,
            'width' => $scene->width,
            'height' => $scene->height,
            'warning' => PanoramaLimits::edgeWarning($scene->width, $scene->height),
        ];
    }
}
