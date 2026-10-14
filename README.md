# 全景漫游

独立的轻量 360° 全景漫游：运营在后台上传全景图、标注热点、发布作品；访客用手机浏览器或微信小程序 web-view 打开同一条分享链接。月子中心等业务只嵌链接，不重复做播放器。

不做自动三维建模、测量、多商家自助注册、付费套餐、陀螺仪和访问统计。

## 目录

- `server/` Laravel 13 + Filament 5。运营后台、上传、公开播放页和 JSON 接口。
- `player/` Photo Sphere Viewer 播放器源码。构建结果在 `server/public/player/`。
- `miniapp/` uni-app 薄壳，只有首页和 web-view。
- `docs/全景漫游-PRD-v1.0.md` 产品说明。
- `prd.mdc` 仓库里原有的其他项目说明，与本产品无关。

云祭祀 MVP 仍留在分支 `cursor/cloud-memorial-mvp-555c`，本产品不与它混在同一套代码里。

## 本地运行

需要 PHP 8.3（含 gd、sqlite、mbstring、xml、curl、zip、intl）、Composer、Node.js 22。

```bash
chmod +x scripts/*.sh
./scripts/setup.sh
./scripts/serve.sh
```

然后打开：

- 首页：http://127.0.0.1:8000
- 后台：http://127.0.0.1:8000/admin
- 账号：`admin@example.com` / `password`（只用于本地，上线前必须修改）

`scripts/serve.sh` 会把 PHP 上传限制抬到 32MB。如果直接 `php artisan serve`，请确认 `upload_max_filesize` 和 `post_max_size` 大于 20MB，否则超限图片会在进到业务校验之前就被 PHP 丢掉。

生成演示漫游（三个场景、三个热点，分享码 `demo-tour`）：

```bash
cd server
php artisan tour:demo
```

播放页：http://127.0.0.1:8000/t/demo-tour

## 环境变量

复制 `server/.env.example` 为 `server/.env`。

| 变量 | 作用 |
| --- | --- |
| `APP_URL` | 播放器和后台的对外根地址。分享链接是 `{APP_URL}/t/{分享码}`。生产必须是 HTTPS。 |
| `ADMIN_NAME` / `ADMIN_EMAIL` / `ADMIN_PASSWORD` | `php artisan db:seed` 创建的运营账号。首版只有这一类账号，没有商家自助注册。 |
| `TENCENT_COS_SECRET_ID` | 腾讯云 API 密钥 SecretId。留空则上传到本地 `storage/app/public`。 |
| `TENCENT_COS_SECRET_KEY` | SecretKey。 |
| `TENCENT_COS_BUCKET` | 存储桶，格式 `bucket-appid`，例如 `panorama-1250000000`。 |
| `TENCENT_COS_REGION` | 例如 `ap-guangzhou`。 |
| `TENCENT_COS_ENDPOINT` | S3 兼容地址，例如 `https://cos.ap-guangzhou.myqcloud.com`。 |
| `TENCENT_COS_CDN_URL` | CDN 的 HTTPS 域名，例如 `https://cdn.example.com`。不要带路径末尾斜杠。播放器用这个域名加载全景图。 |
| `TENCENT_COS_USE_PATH_STYLE` | 一般保持 `false`。 |

三项密钥和存储桶都填写后，上传走 COS，图片 URL 使用 CDN 域名。任一留空则继续用本地磁盘，方便没有密钥时验收。

生产环境还要在 COS 或 CDN 上配置 CORS，允许播放器域名 `GET` / `HEAD` 图片。WebGL 拉跨域贴图时需要 `Access-Control-Allow-Origin`。本地磁盘和播放页同域，不需要 CORS。

## 做一条作品

1. 登录后台，进入「作品」，新建并保存。
2. 在编辑页上传场景。支持 JPG、PNG，单张不超过 20MB。建议最长边不超过 8192 像素；超过仍会保存，并提示可能加载较慢。
3. 拖动排序，把开场的那张设为「初始场景」。第一张会自动成为初始场景。
4. 点「标注热点」，在全景上点击放置，填写标题和目标场景后保存。
5. 点「发布」。编辑页可以复制分享链接，下面有嵌入说明。
6. 「下架」之后，旧链接打开会看到「作品未发布」，不能继续播放。

## 嵌入

业务后台只保存播放页完整 URL，例如 `https://pano.example.com/t/ab12cd34`。

微信小程序：

```bash
cd miniapp
npm install
npm run dev:mp-weixin
```

用微信开发者工具打开 `miniapp/dist/dev/mp-weixin`。开发阶段勾选不校验合法域名。`src/utils/config.js` 的 `PLAYER_BASE_URL` 改成播放器 HTTPS 域名，`src/manifest.json` 的 `mp-weixin.appid` 填小程序 AppID。微信公众平台把该域名配进业务域名。

页面：

- `/pages/index/index` 输入分享码
- `/pages/webview/webview?code={分享码}` 打开 `{PLAYER_BASE_URL}/t/{分享码}`
- `/pages/webview/webview?url={编码后的完整链接}` 直接打开已有链接

其他项目同样只改链接，不用改 `player/`。

## 自动检查

```bash
./scripts/smoke.sh
```

覆盖：登录、作品增删改、发布与下架、20MB 拒绝文案、删除场景后热点 `target_available=false`、演示作品三个场景、后台中文页、播放器热点跳转判断、小程序链接拼接。

## 验收清单

1. 后台上传至少 3 张全景图，标注至少 2 个热点，发布。
2. 手机浏览器打开分享链接：单指拖动、双指缩放、点热点换场景、点底部缩略图换场景。加载时能看到进度；图片失败时有「重试」。
3. 小程序 web-view 打开同一条 URL，表现与浏览器一致。
4. 下架后刷新旧链接，页面写明「作品未发布」，不再进入播放器。
5. 上传超过 20MB 的图片，被拒绝并提示「图片大小不能超过 20MB，请压缩后再上传。」
6. 删除某个场景后，指向它的热点仍可点开提示「目标场景已不存在」，页面不白屏。

## 上线前要人来配的东西

代码里没有真实密钥。上线时需要准备：

1. 腾讯云 COS 存储桶（名称含 APPID）。
2. `TENCENT_COS_SECRET_ID` 和 `TENCENT_COS_SECRET_KEY`。
3. 与桶一致的地域、`TENCENT_COS_ENDPOINT`。
4. HTTPS CDN 域名，写入 `TENCENT_COS_CDN_URL`，并给播放器域名开图片 CORS。
5. 播放器自己的 HTTPS 域名，写入 `APP_URL`。小程序 web-view 的业务域名也填这个域名。
6. 修改 `ADMIN_EMAIL` / `ADMIN_PASSWORD` 后再执行 `php artisan db:seed`。
