<?php

namespace App\Models;

use App\Enums\TourStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class Tour extends Model
{
    protected $fillable = [
        'name',
        'description',
        'status',
        'share_code',
    ];

    protected function casts(): array
    {
        return [
            'status' => TourStatus::class,
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Tour $tour): void {
            if (blank($tour->share_code)) {
                $tour->share_code = static::generateShareCode();
            }

            if (blank($tour->status)) {
                $tour->status = TourStatus::Draft;
            }
        });

        static::deleting(function (Tour $tour): void {
            $tour->scenes()->get()->each->delete();
        });
    }

    public function scenes(): HasMany
    {
        return $this->hasMany(Scene::class)->orderBy('sort_order')->orderBy('id');
    }

    public function shareUrl(): string
    {
        return url('/t/'.$this->share_code);
    }

    public function publish(): void
    {
        if ($this->scenes()->count() === 0) {
            throw ValidationException::withMessages([
                'status' => '请至少上传一个场景后再发布',
            ]);
        }

        if (! $this->scenes()->where('is_entry', true)->exists()) {
            $this->scenes()->orderBy('sort_order')->orderBy('id')->first()?->update(['is_entry' => true]);
        }

        $this->forceFill(['status' => TourStatus::Published])->save();
    }

    public function unpublish(): void
    {
        $this->forceFill(['status' => TourStatus::Draft])->save();
    }

    public static function generateShareCode(): string
    {
        do {
            $code = Str::lower(Str::random(8));
        } while (static::query()->where('share_code', $code)->exists());

        return $code;
    }
}
