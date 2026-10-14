#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT/server"
php artisan test

cd "$ROOT/player"
node --test test/**/*.test.js

cd "$ROOT/miniapp"
node --experimental-detect-module --test test/**/*.test.mjs

echo "P0 自动检查通过。手机上的拖动、双指缩放和热点点击请按 README 验收清单再走一遍。"
