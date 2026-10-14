<?php

namespace App\Filament\Widgets;

use Filament\Widgets\Widget;

class OpsOverview extends Widget
{
    protected static ?int $sort = -2;

    protected static bool $isLazy = false;

    protected int|string|array $columnSpan = 'full';

    protected string $view = 'filament.widgets.ops-overview';
}
