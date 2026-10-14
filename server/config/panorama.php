<?php

return [

    /*
    |--------------------------------------------------------------------------
    | 全景图限制
    |--------------------------------------------------------------------------
    |
    | 单张硬限制 20MB。最长边 8192 只是建议：超过仍可保存，但后台和接口会提示。
    |
    */

    'max_kilobytes' => 20 * 1024,

    'suggested_max_edge' => 8192,

    /*
    |--------------------------------------------------------------------------
    | 存储磁盘
    |--------------------------------------------------------------------------
    |
    | 腾讯云 COS 三项密钥都填写后走 cos 磁盘，否则使用 public（本地 storage）。
    | CDN 域名写入 filesystems.cos.url，由 Storage::url() 拼出播放地址。
    |
    */

    'disk' => (env('TENCENT_COS_SECRET_ID') && env('TENCENT_COS_SECRET_KEY') && env('TENCENT_COS_BUCKET'))
        ? 'cos'
        : 'public',

    'cdn_url' => env('TENCENT_COS_CDN_URL'),

    'admin_name' => env('ADMIN_NAME', '运营'),

    'admin_email' => env('ADMIN_EMAIL', 'admin@example.com'),

    'admin_password' => env('ADMIN_PASSWORD', 'password'),

];
