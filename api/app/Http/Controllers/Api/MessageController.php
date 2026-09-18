<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMessageRequest;
use App\Models\Memorial;
use App\Models\Message;
use Illuminate\Http\JsonResponse;

class MessageController extends Controller
{
    public function store(StoreMessageRequest $request, Memorial $memorial): JsonResponse
    {
        Message::query()->create([
            'memorial_id' => $memorial->id,
            'user_id' => $request->user()->id,
            'content' => $request->validated('content'),
        ]);

        $memorial->load(['messages' => fn ($query) => $query->with('user')->orderByDesc('id')]);

        return response()->json($memorial->toPublicArray(), 201);
    }
}
