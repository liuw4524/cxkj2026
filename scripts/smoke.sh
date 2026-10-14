#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT/server"
php artisan test

# 默认 bash 未开启 globstar，test/**/*.test.js 不会展开，node 会把字面路径当成文件。
collect_tests() {
  local name="$1"
  local file
  TESTS=()
  while IFS= read -r file; do
    TESTS+=("$file")
  done < <(find test -type f -name "$name" | sort)
  if [[ ${#TESTS[@]} -eq 0 ]]; then
    echo "没有找到 ${name} 测试。" >&2
    exit 1
  fi
}

cd "$ROOT/player"
collect_tests '*.test.js'
node --test "${TESTS[@]}"

cd "$ROOT/miniapp"
collect_tests '*.test.mjs'
node --experimental-detect-module --test "${TESTS[@]}"

echo "P0 自动检查通过。手机上的拖动、双指缩放和热点点击请按 README 验收清单再走一遍。"
