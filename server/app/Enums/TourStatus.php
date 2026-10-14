<?php

namespace App\Enums;

enum TourStatus: string
{
    case Draft = 'draft';
    case Published = 'published';

    public function label(): string
    {
        return match ($this) {
            self::Draft => '草稿',
            self::Published => '已上架',
        };
    }
}
