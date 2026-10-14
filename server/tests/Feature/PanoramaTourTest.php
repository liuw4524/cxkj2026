<?php

namespace Tests\Feature;

use App\Models\Scene;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class PanoramaTourTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake('public');

        $this->admin = User::factory()->create([
            'email' => 'admin@example.com',
            'password' => 'password',
        ]);
    }

    public function test_guest_cannot_manage_tours(): void
    {
        $this->getJson('/api/admin/tours')->assertUnauthorized();
    }

    public function test_login_rejects_wrong_password(): void
    {
        $this->postJson('/api/admin/login', [
            'email' => 'admin@example.com',
            'password' => 'wrong-password',
        ])->assertStatus(422)->assertJsonPath('message', '账号或密码错误');
    }

    public function test_operator_can_author_publish_and_play_a_tour(): void
    {
        $token = $this->token();

        $created = $this->withToken($token)->postJson('/api/admin/tours', [
            'name' => '样板间',
            'description' => '验收作品',
        ])->assertCreated();

        $tourId = $created->json('id');
        $shareCode = $created->json('share_code');

        $this->get('/t/'.$shareCode)
            ->assertForbidden()
            ->assertSee('作品未发布')
            ->assertDontSee('player/assets/player.js', false);

        $this->getJson('/api/tours/'.$shareCode)
            ->assertForbidden()
            ->assertJsonPath('message', '作品未发布');

        $living = $this->uploadScene($token, $tourId, '客厅');
        $bedroom = $this->uploadScene($token, $tourId, '卧室');
        $kitchen = $this->uploadScene($token, $tourId, '厨房');

        $this->assertTrue($living->json('is_entry'));
        $this->assertNotEmpty($living->json('image_url'));
        $this->assertNotEmpty($living->json('thumbnail_url'));

        $this->withToken($token)->postJson("/api/admin/tours/{$tourId}/scenes/{$living->json('id')}/hotspots", [
            'title' => '去卧室',
            'target_scene_id' => $bedroom->json('id'),
            'yaw' => 0.4,
            'pitch' => -0.1,
        ])->assertCreated();

        $this->withToken($token)->postJson("/api/admin/tours/{$tourId}/scenes/{$bedroom->json('id')}/hotspots", [
            'title' => '去厨房',
            'target_scene_id' => $kitchen->json('id'),
            'yaw' => -0.2,
            'pitch' => 0,
        ])->assertCreated();

        $this->withToken($token)->postJson("/api/admin/tours/{$tourId}/publish")
            ->assertOk()
            ->assertJsonPath('status', 'published');

        $player = $this->getJson('/api/tours/'.$shareCode)->assertOk();
        $this->assertCount(3, $player->json('scenes'));
        $this->assertSame('去卧室', $player->json('scenes.0.hotspots.0.title'));
        $this->assertTrue($player->json('scenes.0.hotspots.0.target_available'));

        $this->get('/t/'.$shareCode)
            ->assertOk()
            ->assertSee('data-share-code="'.$shareCode.'"', false)
            ->assertSee('player/assets/player.js', false);

        $this->withToken($token)->postJson("/api/admin/tours/{$tourId}/unpublish")->assertOk();

        $this->get('/t/'.$shareCode)->assertForbidden()->assertSee('作品未发布');
        $this->getJson('/api/tours/'.$shareCode)->assertForbidden()->assertJsonPath('message', '作品未发布');
    }

    public function test_oversize_image_is_rejected_with_a_clear_message(): void
    {
        $token = $this->token();
        $tourId = $this->withToken($token)->postJson('/api/admin/tours', [
            'name' => '超限测试',
        ])->json('id');

        $this->withToken($token)->post("/api/admin/tours/{$tourId}/scenes", [
            'name' => '太大',
            'image' => UploadedFile::fake()->create('huge.jpg', 20481, 'image/jpeg'),
        ])->assertStatus(422)->assertJsonPath('errors.image.0', '图片大小不能超过 20MB，请压缩后再上传。');
    }

    public function test_deleted_scene_makes_incoming_hotspots_fail_safely(): void
    {
        $token = $this->token();
        $tourId = $this->withToken($token)->postJson('/api/admin/tours', [
            'name' => '删除场景',
        ])->json('id');
        $shareCode = $this->withToken($token)->getJson("/api/admin/tours/{$tourId}")->json('share_code');

        $from = $this->uploadScene($token, $tourId, '客厅');
        $to = $this->uploadScene($token, $tourId, '卧室');

        $hotspotId = $this->withToken($token)->postJson("/api/admin/tours/{$tourId}/scenes/{$from->json('id')}/hotspots", [
            'title' => '去卧室',
            'target_scene_id' => $to->json('id'),
            'yaw' => 0.2,
            'pitch' => 0,
        ])->json('id');

        $this->withToken($token)->deleteJson("/api/admin/tours/{$tourId}/scenes/{$to->json('id')}")->assertOk();
        $this->withToken($token)->postJson("/api/admin/tours/{$tourId}/publish")->assertOk();

        $this->assertNull(Scene::query()->find($from->json('id'))->hotspots()->find($hotspotId)?->target_scene_id);

        $payload = $this->getJson('/api/tours/'.$shareCode)->assertOk()->json();
        $hotspot = $payload['scenes'][0]['hotspots'][0];

        $this->assertNull($hotspot['target_scene_id']);
        $this->assertFalse($hotspot['target_available']);
        $this->get('/t/'.$shareCode)->assertOk()->assertSee('player/assets/player.js', false);
    }

    public function test_publish_requires_a_scene_and_missing_tour_is_explicit(): void
    {
        $token = $this->token();
        $tourId = $this->withToken($token)->postJson('/api/admin/tours', [
            'name' => '空作品',
        ])->json('id');

        $this->withToken($token)->postJson("/api/admin/tours/{$tourId}/publish")
            ->assertStatus(422)
            ->assertJsonPath('message', '请至少上传一个场景后再发布');

        $this->get('/t/missing-tour')->assertNotFound()->assertSee('作品不存在');
        $this->getJson('/api/tours/missing-tour')->assertNotFound()->assertJsonPath('message', '作品不存在');
    }

    public function test_demo_command_builds_three_scenes_and_hotspots(): void
    {
        $this->artisan('tour:demo')->assertSuccessful();

        $payload = $this->getJson('/api/tours/demo-tour')->assertOk()->json();
        $this->assertCount(3, $payload['scenes']);
        $this->assertGreaterThanOrEqual(2, collect($payload['scenes'])->sum(fn (array $scene) => count($scene['hotspots'])));
        $this->get('/t/demo-tour')->assertOk()->assertSee('演示样板间');
    }

    public function test_admin_panel_and_hotspot_page_render_in_chinese(): void
    {
        $this->get('/admin/login')->assertOk()->assertSee('登录');

        $token = $this->token();
        $tourId = $this->withToken($token)->postJson('/api/admin/tours', [
            'name' => '后台标注',
        ])->json('id');
        $sceneId = $this->uploadScene($token, $tourId, '客厅')->json('id');
        $this->uploadScene($token, $tourId, '卧室');

        $this->actingAs($this->admin, 'web')
            ->get('/admin')
            ->assertOk()
            ->assertSee('全景漫游');

        $this->actingAs($this->admin, 'web')
            ->get('/admin/tours')
            ->assertOk()
            ->assertSee('后台标注');

        $this->actingAs($this->admin, 'web')
            ->get("/admin/tours/{$tourId}/edit")
            ->assertOk()
            ->assertSee('分享链接');

        $hotspotPage = $this->actingAs($this->admin, 'web')
            ->get("/admin/tours/{$tourId}/scenes/{$sceneId}/hotspots");

        $hotspotPage->assertOk()
            ->assertSee('标注热点')
            ->assertSee('pano-editor', false);
    }

    private function token(): string
    {
        return $this->postJson('/api/admin/login', [
            'email' => 'admin@example.com',
            'password' => 'password',
        ])->assertOk()->json('token');
    }

    private function uploadScene(string $token, int $tourId, string $name)
    {
        return $this->withToken($token)->post("/api/admin/tours/{$tourId}/scenes", [
            'name' => $name,
            'image' => UploadedFile::fake()->image($name.'.jpg', 128, 64),
        ])->assertCreated();
    }
}
