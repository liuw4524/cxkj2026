<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(['memorial_id', 'user_id', 'type'])]
class Offering extends Model
{
    public const TYPES = ['incense', 'candle', 'flower'];

    public function memorial(): BelongsTo
    {
        return $this->belongsTo(Memorial::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public static function countColumn(string $type): string
    {
        return match ($type) {
            'incense' => 'incense_count',
            'candle' => 'candle_count',
            'flower' => 'flower_count',
            default => throw new \InvalidArgumentException('无效的供奉类型'),
        };
    }
}
