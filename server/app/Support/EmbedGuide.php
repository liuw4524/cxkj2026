<?php

namespace App\Support;

final class EmbedGuide
{
    public static function text(?string $shareCode = null): string
    {
        $code = $shareCode ?: '{分享码}';

        return '业务系统（如月子中心）只需把分享链接填到自己的全景配置里，不用改播放器。'
            ."微信小程序使用 web-view 打开同一链接，页面路径：/pages/webview/webview?code={$code}。";
    }
}
