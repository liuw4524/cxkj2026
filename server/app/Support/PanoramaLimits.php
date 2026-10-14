<?php

namespace App\Support;

final class PanoramaLimits
{
    public const MAX_KILOBYTES = 20480;

    public const SUGGESTED_MAX_EDGE = 8192;

    public const OVERSIZE_MESSAGE = '图片大小不能超过 20MB，请压缩后再上传。';

    public const INVALID_TYPE_MESSAGE = '请上传有效的 JPG 或 PNG 全景图。';

    public const EXTENSION_MESSAGE = '仅支持 JPG、PNG 格式的全景图。';

    public static function edgeWarning(?int $width, ?int $height): ?string
    {
        $edge = max($width ?? 0, $height ?? 0);

        if ($edge <= self::SUGGESTED_MAX_EDGE) {
            return null;
        }

        return "建议最长边不超过 8192 像素，当前为 {$edge}。图片已保存，但加载可能较慢。";
    }
}
