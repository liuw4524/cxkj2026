<?php

namespace App\Http\Controllers\Api;

use App\Enums\TourStatus;
use App\Http\Controllers\Controller;
use App\Models\Tour;
use App\Support\EmbedGuide;
use App\Support\TourPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AdminTourController extends Controller
{
    public function index(): JsonResponse
    {
        $tours = Tour::query()
            ->withCount('scenes')
            ->latest('id')
            ->get()
            ->map(fn (Tour $tour): array => $this->summary($tour));

        return response()->json(['data' => $tours]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:80'],
            'description' => ['nullable', 'string', 'max:500'],
        ], [
            'name.required' => '请填写作品名称。',
            'name.max' => '作品名称不能超过 80 个字。',
        ]);

        $tour = Tour::query()->create([
            'name' => $data['name'],
            'description' => $data['description'] ?? null,
            'status' => TourStatus::Draft,
        ]);

        return response()->json($this->detail($tour), 201);
    }

    public function show(Tour $tour): JsonResponse
    {
        return response()->json($this->detail($tour));
    }

    public function update(Request $request, Tour $tour): JsonResponse
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:80'],
            'description' => ['nullable', 'string', 'max:500'],
        ], [
            'name.required' => '请填写作品名称。',
        ]);

        $tour->fill($data)->save();

        return response()->json($this->detail($tour->refresh()));
    }

    public function destroy(Tour $tour): JsonResponse
    {
        $tour->delete();

        return response()->json(['message' => '作品已删除']);
    }

    public function publish(Tour $tour): JsonResponse
    {
        try {
            $tour->publish();
        } catch (ValidationException) {
            return response()->json(['message' => '请至少上传一个场景后再发布'], 422);
        }

        return response()->json($this->detail($tour->refresh()));
    }

    public function unpublish(Tour $tour): JsonResponse
    {
        $tour->unpublish();

        return response()->json($this->detail($tour->refresh()));
    }

    /**
     * @return array<string, mixed>
     */
    private function summary(Tour $tour): array
    {
        return [
            'id' => $tour->id,
            'name' => $tour->name,
            'status' => $tour->status->value,
            'status_label' => $tour->status->label(),
            'share_code' => $tour->share_code,
            'share_url' => $tour->shareUrl(),
            'scenes_count' => $tour->scenes_count ?? $tour->scenes()->count(),
            'updated_at' => $tour->updated_at?->toIso8601String(),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function detail(Tour $tour): array
    {
        return [
            ...$this->summary($tour),
            'description' => $tour->description,
            'embed_notes' => EmbedGuide::text($tour->share_code),
            'player' => TourPayload::forPlayer($tour),
        ];
    }
}
