<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>全景漫游</title>
    <style>
        :root { color-scheme: light; }
        body { margin: 0; font-family: "PingFang SC", "Noto Sans SC", sans-serif; background: #f6f3ee; color: #1c1917; }
        main { max-width: 760px; margin: 0 auto; padding: 48px 20px 80px; }
        h1 { font-size: 40px; margin: 0 0 8px; }
        p { line-height: 1.7; color: #44403c; }
        .actions { display: flex; gap: 12px; flex-wrap: wrap; margin: 24px 0; }
        a.button { background: #0f766e; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 999px; }
        a.ghost { background: #fff; color: #0f766e; border: 1px solid #99f6e4; }
        code { background: #fff; padding: 2px 6px; border-radius: 6px; }
        ol { line-height: 1.8; }
    </style>
</head>
<body>
<main>
    <h1>全景漫游</h1>
    <p>上传全景图、标注热点、生成一条可分享的链接。手机浏览器和小程序 web-view 打开的是同一套播放页。</p>
    <div class="actions">
        <a class="button" href="{{ url('/admin') }}">进入运营后台</a>
        <a class="button ghost" href="{{ url('/t/demo-tour') }}">打开演示作品</a>
    </div>
    <p>本地还没有演示作品时，在 <code>server</code> 目录执行 <code>php artisan tour:demo</code>。演示链接是 <code>/t/demo-tour</code>。</p>
    <ol>
        <li>运营账号登录后台，新建作品并上传至少一张全景图。</li>
        <li>在场景上标注热点，发布作品。</li>
        <li>把分享链接交给业务系统。月子中心等项目只改配置，不用改播放器。</li>
    </ol>
</main>
</body>
</html>
