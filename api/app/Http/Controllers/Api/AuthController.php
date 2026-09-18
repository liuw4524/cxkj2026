<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\WeChatAuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function wechat(Request $request, WeChatAuthService $weChatAuth): JsonResponse
    {
        $validated = $request->validate([
            'code' => ['required', 'string'],
        ], [
            'code.required' => '请提供微信登录 code',
        ]);

        return $this->issueToken($weChatAuth->loginByCode($validated['code']));
    }

    public function dev(Request $request, WeChatAuthService $weChatAuth): JsonResponse
    {
        if (! filter_var(config('services.wechat.mock_login'), FILTER_VALIDATE_BOOLEAN)) {
            return response()->json(['message' => '开发 mock 登录未开启（需 WECHAT_MOCK_LOGIN=true）'], 403);
        }

        $code = $request->input('code', 'dev-mock');

        return $this->issueToken($weChatAuth->loginByCode(is_string($code) && $code !== '' ? $code : 'dev-mock'));
    }

    private function issueToken(User $user): JsonResponse
    {
        $token = $user->createToken('wechat')->plainTextToken;

        return response()->json([
            'token' => $token,
            'token_type' => 'Bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
            ],
        ]);
    }
}
