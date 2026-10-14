<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>{{ $tour->name }} - 全景漫游</title>
    <link rel="stylesheet" href="{{ asset('player/assets/player.css') }}">
</head>
<body>
    <div
        id="app"
        data-share-code="{{ $tour->share_code }}"
        data-api-base="{{ url('/api') }}"
    ></div>
    <script type="module" src="{{ asset('player/assets/player.js') }}"></script>
</body>
</html>
