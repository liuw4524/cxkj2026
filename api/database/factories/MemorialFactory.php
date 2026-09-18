<?php

namespace Database\Factories;

use App\Models\Memorial;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Memorial>
 */
class MemorialFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'token' => Memorial::generateToken(),
            'name' => fake()->name(),
            'death_anniversary' => fake()->date(),
            'photo_url' => null,
            'incense_count' => 0,
            'candle_count' => 0,
            'flower_count' => 0,
        ];
    }
}
