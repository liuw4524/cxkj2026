<?php

namespace App\Models;

use Database\Factories\MemorialFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

#[Fillable([
    'user_id',
    'token',
    'name',
    'death_anniversary',
    'photo_url',
    'incense_count',
    'candle_count',
    'flower_count',
])]
class Memorial extends Model
{
    /** @use HasFactory<MemorialFactory> */
    use HasFactory;

    protected $attributes = [
        'photo_url' => null,
        'incense_count' => 0,
        'candle_count' => 0,
        'flower_count' => 0,
    ];

    protected function casts(): array
    {
        return [
            'death_anniversary' => 'date',
            'incense_count' => 'integer',
            'candle_count' => 'integer',
            'flower_count' => 'integer',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function offerings(): HasMany
    {
        return $this->hasMany(Offering::class);
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class)->orderByDesc('id');
    }

    public static function generateToken(): string
    {
        do {
            $token = Str::lower(Str::random(16));
        } while (self::query()->where('token', $token)->exists());

        return $token;
    }

    public function sharePath(): string
    {
        return '/pages/memorial/detail?token='.$this->token;
    }

    public function toPublicArray(): array
    {
        return [
            'id' => $this->id,
            'token' => $this->token,
            'name' => $this->name,
            'death_anniversary' => $this->death_anniversary?->toDateString(),
            'photo_url' => $this->photo_url,
            'share_path' => $this->sharePath(),
            'offerings' => [
                'incense' => $this->incense_count,
                'candle' => $this->candle_count,
                'flower' => $this->flower_count,
            ],
            'messages' => $this->messages
                ->map(fn (Message $message) => [
                    'id' => $message->id,
                    'content' => $message->content,
                    'author_name' => $message->user?->name ?: '匿名亲友',
                    'created_at' => $message->created_at?->toIso8601String(),
                ])
                ->values()
                ->all(),
        ];
    }
}
