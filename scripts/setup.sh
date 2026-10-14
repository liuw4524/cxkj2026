#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT/server"
composer install --no-interaction
if [[ ! -f .env ]]; then
  cp .env.example .env
  php artisan key:generate
fi
touch database/database.sqlite
php artisan migrate --force
php artisan db:seed --force
php artisan storage:link || true
php artisan filament:assets

cd "$ROOT/player"
npm install
npm run build

echo "本地环境已就绪。运行 scripts/serve.sh"
