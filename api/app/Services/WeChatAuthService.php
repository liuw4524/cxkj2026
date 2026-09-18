<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class WeChatAuthService
{
    public function loginByCode(string $code): User
    {
        $code = trim($code);

        if ($code === '') {
            throw ValidationException::withMessages([
                'code' => '请提供微信登录 code',
            ]);
        }

        [$openid, $nickname] = $this->resolveOpenid($code);

        return User::query()->firstOrCreate(
            ['openid' => $openid],
            ['name' => $nickname],
        );
    }

    /**
     * @return array{0: string, 1: string}
     */
    private function resolveOpenid(string $code): array
    {
        if ($this->mockEnabled()) {
            $openid = $code === 'dev-mock'
                ? 'dev-mock-openid'
                : 'mock-'.substr(hash('sha256', $code), 0, 24);

            return [$openid, '开发测试用户'];
        }

        $appid = (string) config('services.wechat.appid');
        $secret = (string) config('services.wechat.secret');

        if ($this->isPlaceholder($appid) || $this->isPlaceholder($secret)) {
            throw ValidationException::withMessages([
                'code' => '未配置真实微信 AppID/Secret。QA 可设置 WECHAT_MOCK_LOGIN=true，并用 code=dev-mock 登录。',
            ]);
        }

        $response = Http::get('https://api.weixin.qq.com/sns/jscode2session', [
            'appid' => $appid,
            'secret' => $secret,
            'js_code' => $code,
            'grant_type' => 'authorization_code',
        ]);

        $data = $response->json() ?? [];

        if (! empty($data['openid'])) {
            return [$data['openid'], '微信用户'];
        }

        throw ValidationException::withMessages([
            'code' => '微信登录失败：'.($data['errmsg'] ?? '未知错误'),
        ]);
    }

    private function mockEnabled(): bool
    {
        return filter_var(config('services.wechat.mock_login'), FILTER_VALIDATE_BOOLEAN);
    }

    private function isPlaceholder(?string $value): bool
    {
        $value = trim((string) $value);

        return $value === ''
            || $value === 'your-wechat-appid'
            || $value === 'your-wechat-secret';
    }
}
