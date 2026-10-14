<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Scene extends Model
{
    protected $fillable = [
        'tour_id',
        'name',
        'image_path',
        'image_url',
        'thumbnail_path',
        'thumbnail_url',
        'sort_order',
        'is_entry',
        'width',
        'height',
    ];

    protected function casts(): array
    {
        return [
            'is_entry' => 'boolean',
            'sort_order' => 'integer',
            'width' => 'integer',
            'height' => 'integer',
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Scene $scene): void {
            if ($scene->sort_order === null) {
                $max = static::query()->where('tour_id', $scene->tour_id)->max('sort_order');
                $scene->sort_order = $max === null ? 0 : ((int) $max) + 1;
            }

            $hasScenes = static::query()->where('tour_id', $scene->tour_id)->exists();

            if (! $hasScenes) {
                $scene->is_entry = true;
            }
        });

        static::saving(function (Scene $scene): void {
            if (! $scene->is_entry) {
                return;
            }

            static::query()
                ->where('tour_id', $scene->tour_id)
                ->when($scene->exists, fn ($query) => $query->whereKeyNot($scene->id))
                ->update(['is_entry' => false]);
        });

        static::created(function (Scene $scene): void {
            $scene->standpoints()->create([
                'name' => '默认站位',
                'is_entry' => true,
                'sort_order' => 0,
                'position_x' => 0,
                'position_y' => 0,
                'yaw' => 0,
                'pitch' => 0,
            ]);
        });

        static::deleting(function (Scene $scene): void {
            $scene->standpoints()->get()->each->delete();

            if (! $scene->is_entry) {
                return;
            }

            $next = static::query()
                ->where('tour_id', $scene->tour_id)
                ->whereKeyNot($scene->id)
                ->orderBy('sort_order')
                ->orderBy('id')
                ->first();

            $next?->update(['is_entry' => true]);
        });
    }

    public function tour(): BelongsTo
    {
        return $this->belongsTo(Tour::class);
    }

    public function hotspots(): HasMany
    {
        return $this->hasMany(Hotspot::class)->orderBy('id');
    }

    public function standpoints(): HasMany
    {
        return $this->hasMany(Standpoint::class)->orderBy('sort_order')->orderBy('id');
    }

    public function markAsEntry(): void
    {
        $this->is_entry = true;
        $this->save();
    }
}
