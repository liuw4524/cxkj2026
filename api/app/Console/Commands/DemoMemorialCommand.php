<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DemoMemorialCommand extends Command
{
    protected $signature = 'memorial:demo';

    protected $description = '迁移并写入一条演示纪念页，打印可分享 token 与小程序路径';

    public function handle(): int
    {
        $this->call('migrate', ['--force' => true]);
        $this->callSilently('storage:link');
        $this->call('db:seed', ['--force' => true]);

        return self::SUCCESS;
    }
}
