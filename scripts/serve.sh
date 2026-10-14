#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/server"

# 追加扫描目录，把单张上传上限抬到 32MB，覆盖 PHP 默认的 2MB。
export PHP_INI_SCAN_DIR="/etc/php/8.3/cli/conf.d:${ROOT}/server/php-conf${PHP_INI_SCAN_DIR:+:$PHP_INI_SCAN_DIR}"

php artisan serve --host=127.0.0.1 --port=8000
