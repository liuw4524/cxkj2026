<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Hotspot extends Model
{
    protected $fillable = [
        'scene_id',
        'standpoint_id',
        'target_scene_id',
        'target_standpoint_id',
        'target_kind',
        'title',
        'yaw',
        'pitch',
    ];

    protected $attributes = [
        'target_kind' => 'scene',
    ];

    protected function casts(): array
    {
        return [
            'yaw' => 'float',
            'pitch' => 'float',
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Hotspot $hotspot): void {
            if (! $hotspot->standpoint_id && $hotspot->scene_id) {
                $hotspot->standpoint_id = Standpoint::query()
                    ->where('scene_id', $hotspot->scene_id)
                    ->orderByDesc('is_entry')
                    ->orderBy('sort_order')
                    ->orderBy('id')
                    ->value('id');
            }

            if (blank($hotspot->target_kind)) {
                $hotspot->target_kind = $hotspot->target_standpoint_id ? 'standpoint' : 'scene';
            }
        });
    }

    public function scene(): BelongsTo
    {
        return $this->belongsTo(Scene::class);
    }

    public function standpoint(): BelongsTo
    {
        return $this->belongsTo(Standpoint::class);
    }

    public function targetScene(): BelongsTo
    {
        return $this->belongsTo(Scene::class, 'target_scene_id');
    }

    public function targetStandpoint(): BelongsTo
    {
        return $this->belongsTo(Standpoint::class, 'target_standpoint_id');
    }
}
