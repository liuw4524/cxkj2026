<?php

namespace Tests\Feature;

use App\Models\Memorial;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class MemorialApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_get_memorial_by_token_does_not_require_auth(): void
    {
        $memorial = Memorial::factory()->create([
            'name' => '李秀英',
            'death_anniversary' => '2019-09-18',
            'incense_count' => 4,
            'candle_count' => 1,
            'flower_count' => 2,
        ]);

        $memorial->messages()->create([
            'user_id' => $memorial->user_id,
            'content' => '思念永在。',
        ]);

        $response = $this->getJson('/api/memorials/'.$memorial->token);

        $response->assertOk()
            ->assertJsonPath('name', '李秀英')
            ->assertJsonPath('death_anniversary', '2019-09-18')
            ->assertJsonPath('offerings.incense', 4)
            ->assertJsonPath('offerings.candle', 1)
            ->assertJsonPath('offerings.flower', 2)
            ->assertJsonPath('messages.0.content', '思念永在。')
            ->assertJsonPath('share_path', '/pages/memorial/detail?token='.$memorial->token);
    }

    public function test_invalid_token_returns_clear_not_found_error(): void
    {
        $this->getJson('/api/memorials/does-not-exist')
            ->assertNotFound()
            ->assertJsonPath('message', '纪念页不存在或链接已失效');
    }

    public function test_mutating_endpoints_without_auth_return_401(): void
    {
        $memorial = Memorial::factory()->create();

        $this->postJson('/api/memorials', [
            'name' => '张三',
            'death_anniversary' => '2020-01-01',
        ])->assertUnauthorized();

        $this->postJson('/api/memorials/'.$memorial->id.'/offerings', [
            'type' => 'incense',
        ])->assertUnauthorized();

        $this->postJson('/api/memorials/'.$memorial->id.'/messages', [
            'content' => '一路走好',
        ])->assertUnauthorized();
    }

    public function test_create_memorial_requires_name_and_anniversary_and_returns_share_token(): void
    {
        $user = User::factory()->create();

        Sanctum::actingAs($user);
        $this->postJson('/api/memorials', [])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'death_anniversary']);

        $this->postJson('/api/memorials', [
            'name' => '   ',
            'death_anniversary' => '',
        ])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'death_anniversary']);

        $response = $this->postJson('/api/memorials', [
            'name' => '周明',
            'death_anniversary' => '2021-05-20',
        ]);

        $response->assertCreated()
            ->assertJsonPath('name', '周明')
            ->assertJsonPath('death_anniversary', '2021-05-20')
            ->assertJsonStructure(['id', 'token', 'share_path']);

        $this->assertNotEmpty($response->json('token'));
        $this->assertDatabaseHas('memorials', [
            'name' => '周明',
            'token' => $response->json('token'),
        ]);
    }

    public function test_each_offering_type_increments_its_own_count(): void
    {
        $user = User::factory()->create();
        $memorial = Memorial::factory()->create();
        Sanctum::actingAs($user);

        $this->postJson('/api/memorials/'.$memorial->id.'/offerings', ['type' => 'incense'])
            ->assertCreated()
            ->assertJsonPath('offerings.incense', 1)
            ->assertJsonPath('offerings.candle', 0)
            ->assertJsonPath('offerings.flower', 0);

        $this->postJson('/api/memorials/'.$memorial->id.'/offerings', ['type' => 'candle'])
            ->assertCreated()
            ->assertJsonPath('offerings.candle', 1);

        $this->postJson('/api/memorials/'.$memorial->id.'/offerings', ['type' => 'flower'])
            ->assertCreated()
            ->assertJsonPath('offerings.flower', 1);

        $this->postJson('/api/memorials/'.$memorial->id.'/offerings', ['type' => 'gold'])
            ->assertUnprocessable();
    }

    public function test_empty_and_over_limit_messages_are_rejected(): void
    {
        $user = User::factory()->create();
        $memorial = Memorial::factory()->create();
        Sanctum::actingAs($user);

        $this->postJson('/api/memorials/'.$memorial->id.'/messages', ['content' => ''])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['content']);

        $this->postJson('/api/memorials/'.$memorial->id.'/messages', ['content' => '   '])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['content']);

        $this->postJson('/api/memorials/'.$memorial->id.'/messages', ['content' => str_repeat('啊', 201)])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['content']);

        $this->postJson('/api/memorials/'.$memorial->id.'/messages', ['content' => '愿您安息'])
            ->assertCreated()
            ->assertJsonPath('messages.0.content', '愿您安息');
    }

    public function test_messages_are_returned_newest_first(): void
    {
        $user = User::factory()->create();
        $memorial = Memorial::factory()->create();
        Sanctum::actingAs($user);

        $this->postJson('/api/memorials/'.$memorial->id.'/messages', ['content' => '第一条']);
        $this->postJson('/api/memorials/'.$memorial->id.'/messages', ['content' => '第二条']);

        $this->getJson('/api/memorials/'.$memorial->token)
            ->assertOk()
            ->assertJsonPath('messages.0.content', '第二条')
            ->assertJsonPath('messages.1.content', '第一条');
    }

    public function test_dev_mock_wechat_login_issues_token(): void
    {
        $this->postJson('/api/auth/wechat', ['code' => 'dev-mock'])
            ->assertOk()
            ->assertJsonStructure(['token', 'user' => ['id', 'name']]);

        $this->postJson('/api/auth/dev')
            ->assertOk()
            ->assertJsonPath('user.name', '开发测试用户');
    }

    public function test_real_wechat_login_uses_jscode2session_when_mock_disabled(): void
    {
        config([
            'services.wechat.mock_login' => false,
            'services.wechat.appid' => 'wx-real-appid',
            'services.wechat.secret' => 'wx-real-secret',
        ]);

        Http::fake([
            'https://api.weixin.qq.com/sns/jscode2session*' => Http::response([
                'openid' => 'oRealOpenId123',
                'session_key' => 'session',
            ], 200),
        ]);

        $this->postJson('/api/auth/wechat', ['code' => 'wx-code-abc'])
            ->assertOk()
            ->assertJsonPath('user.name', '微信用户');

        $this->assertDatabaseHas('users', ['openid' => 'oRealOpenId123']);
    }
}
