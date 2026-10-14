<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => config('panorama.admin_email')],
            [
                'name' => config('panorama.admin_name'),
                'password' => config('panorama.admin_password'),
            ],
        );
    }
}
