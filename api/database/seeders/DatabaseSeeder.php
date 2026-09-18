<?php

namespace Database\Seeders;

use App\Models\Memorial;
use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::query()->firstOrCreate(
            ['openid' => 'dev-mock-openid'],
            ['name' => '开发测试用户'],
        );

        $memorial = Memorial::query()->firstOrCreate(
            ['token' => 'demo-token-0001'],
            [
                'user_id' => $user->id,
                'name' => '王德福',
                'death_anniversary' => '2018-04-12',
                'photo_url' => null,
                'incense_count' => 3,
                'candle_count' => 2,
                'flower_count' => 1,
            ],
        );

        if ($memorial->messages()->doesntExist()) {
            Message::query()->create([
                'memorial_id' => $memorial->id,
                'user_id' => $user->id,
                'content' => '愿您安息，我们永远想念您。',
            ]);
        }

        $path = $memorial->sharePath();

        $this->command?->newLine();
        $this->command?->info('演示纪念页已就绪：');
        $this->command?->line('  token      : '.$memorial->token);
        $this->command?->line('  小程序路径 : '.$path);
        $this->command?->line('  公开接口   : GET /api/memorials/'.$memorial->token);
        $this->command?->newLine();
    }
}
