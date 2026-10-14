<?php

namespace App\Http\Controllers\Api;

use App\Enums\TourStatus;
use App\Http\Controllers\Controller;
use App\Models\Tour;
use App\Support\TourPayload;
use Illuminate\Http\JsonResponse;

class PublicTourController extends Controller
{
    public function show(string $shareCode): JsonResponse
    {
        $tour = Tour::query()->where('share_code', $shareCode)->first();

        if (! $tour) {
            return response()->json(['message' => '作品不存在'], 404);
        }

        if ($tour->status !== TourStatus::Published) {
            return response()->json(['message' => '作品未发布'], 403);
        }

        return response()->json(TourPayload::forPlayer($tour));
    }
}
