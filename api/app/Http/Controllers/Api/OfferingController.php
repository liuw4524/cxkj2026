<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOfferingRequest;
use App\Models\Memorial;
use App\Models\Offering;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class OfferingController extends Controller
{
    public function store(StoreOfferingRequest $request, Memorial $memorial): JsonResponse
    {
        $type = $request->validated('type');

        $memorial = DB::transaction(function () use ($memorial, $request, $type) {
            $locked = Memorial::query()->whereKey($memorial->id)->lockForUpdate()->firstOrFail();
            $locked->increment(Offering::countColumn($type));

            Offering::query()->create([
                'memorial_id' => $locked->id,
                'user_id' => $request->user()->id,
                'type' => $type,
            ]);

            return $locked->refresh();
        });

        $memorial->load(['messages' => fn ($query) => $query->with('user')->orderByDesc('id')]);

        return response()->json($memorial->toPublicArray(), 201);
    }
}
