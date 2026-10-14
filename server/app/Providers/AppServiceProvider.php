<?php

namespace App\Providers;

use App\Models\Scene;
use App\Models\Standpoint;
use App\Observers\SceneObserver;
use App\Observers\StandpointObserver;
use App\Rules\PanoramaUploadRule;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        App::setLocale('zh_CN');

        Scene::observe(SceneObserver::class);
        Standpoint::observe(StandpointObserver::class);

        config([
            'livewire.temporary_file_upload.rules' => ['required', 'file', new PanoramaUploadRule],
        ]);
    }
}
