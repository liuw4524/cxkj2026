<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMemorialRequest;
use App\Models\Memorial;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class MemorialController extends Controller
{
    public function show(string $token): JsonResponse
    {
        $memorial = Memorial::query()
            ->with(['messages' => fn ($query) => $query->with('user')->orderByDesc('id')])
            ->where('token', $token)
            ->first();

        if (! $memorial) {
            return response()->json([
                'message' => '纪念页不存在或链接已失效',
            ], 404);
        }

        return response()->json($memorial->toPublicArray());
    }

    public function store(StoreMemorialRequest $request): JsonResponse
    {
        $photoUrl = $request->input('photo_url');

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('photos', 'public');
            $photoUrl = Storage::disk('public')->url($path);
        }

        $memorial = Memorial::query()->create([
            'user_id' => $request->user()->id,
            'token' => Memorial::generateToken(),
            'name' => $request->validated('name'),
            'death_anniversary' => $request->validated('death_anniversary'),
            'photo_url' => $photoUrl,
        ]);

        $memorial->load(['messages' => fn ($query) => $query->with('user')->orderByDesc('id')]);

        return response()->json($memorial->toPublicArray(), 201);
    }
}
