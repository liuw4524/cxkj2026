<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title }} - 全景漫游</title>
    <style>
        body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #14181c; color: #f5f5f4; font-family: "PingFang SC", "Noto Sans SC", sans-serif; }
        main { text-align: center; padding: 32px 20px; max-width: 420px; }
        h1 { font-size: 32px; margin: 0 0 12px; }
        p { margin: 0 0 20px; color: #d6d3d1; line-height: 1.6; }
        a { color: #5eead4; }
    </style>
</head>
<body>
<main>
    <h1>{{ $message }}</h1>
    <p>{{ $hint }}</p>
    <a href="{{ url('/') }}">返回首页</a>
</main>
</body>
</html>
