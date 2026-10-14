<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Standpoint extends Model
{
    protected $fillable = [
        'scene_id',
        'name',
        'image_path',
        'image_url',
        'thumbnail_path',
        'thumbnail_url',
        'position_x',
        'position_y',
        'yaw',
        'pitch',
        'sort_order',
        'is_entry',
        'width',
        'height',
    ];

    protected function casts(): array
    {
        return [
            'position_x' => 'float',
            'position_y' => 'float',
            'yaw' => 'float',
            'pitch' => 'float',
            'sort_order' => 'integer',
            'is_entry' => 'boolean',
            'width' => 'integer',
            'height' => 'integer',
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Standpoint $standpoint): void {
            if ($standpoint->sort_order === null) {
                $max = static::query()->where('scene_id', $standpoint->scene_id)->max('sort_order');
                $standpoint->sort_order = $max === null ? 0 : ((int) $max) + 1;
            }

            $hasStandpoint = static::query()->where('scene_id', $standpoint->scene_id)->exists();

            if (! $hasStandpoint) {
                $standpoint->is_entry = true;
            }
        });

        static::saving(function (Standpoint $standpoint): void {
            if (! $standpoint->is_entry) {
                $otherEntry = static::query()
                    ->where('scene_id', $standpoint->scene_id)
                    ->where('is_entry', true)
                    ->when($standpoint->exists, fn ($query) => $query->whereKeyNot($standpoint->id))
                    ->exists();

                if (! $otherEntry) {
                    $standpoint->is_entry = true;
                }

                return;
            }

            static::query()
                ->where('scene_id', $standpoint->scene_id)
                ->when($standpoint->exists, fn ($query) => $query->whereKeyNot($standpoint->id))
                ->update(['is_entry' => false]);
        });

        static::deleting(function (Standpoint $standpoint): void {
            Hotspot::query()
                ->where('target_standpoint_id', $standpoint->id)
                ->update(['target_standpoint_id' => null]);

            $standpoint->hotspots()->get()->each->delete();

            if (! $standpoint->is_entry) {
                return;
            }

            $next = static::query()
                ->where('scene_id', $standpoint->scene_id)
                ->whereKeyNot($standpoint->id)
                ->orderBy('sort_order')
                ->orderBy('id')
                ->first();

            $next?->update(['is_entry' => true]);
        });
    }

    public function scene(): BelongsTo
    {
        return $this->belongsTo(Scene::class);
    }

    public function hotspots(): HasMany
    {
        return $this->hasMany(Hotspot::class)->orderBy('id');
    }

    public function markAsEntry(): void
    {
        $this->is_entry = true;
        $this->save();
    }
}
