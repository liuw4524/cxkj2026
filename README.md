# 云祭祀 MVP v0.1

微信小程序（uni-app）+ Laravel API。纪念页可凭 token 公开阅读；创建纪念页、供奉、留言需要登录。

本仓库锁定范围：**无支付、无后台审核、无直播/家谱/复杂角色、无 Flutter**。

## 目录

- `api/` Laravel API
- `miniapp/` uni-app 微信小程序
- `prd.mdc` 仓库原有文件，与本 MVP 无关

## 环境变量

复制 `api/.env.example` 为 `api/.env` 后按需修改：

| 变量 | 说明 |
| --- | --- |
| `APP_URL` | API 根地址，默认 `http://localhost:8000` |
| `WECHAT_APPID` | 微信小程序 AppID，占位 `your-wechat-appid` |
| `WECHAT_SECRET` | 微信小程序 Secret，占位 `your-wechat-secret` |
| `WECHAT_MOCK_LOGIN` | `true` 时启用开发 mock 登录（**无真实 AppID 也可 QA**） |

数据库默认 SQLite（`api/database/database.sqlite`），无需安装 MySQL。

## 启动 API

需要 PHP 8.3+ 与 Composer。

```bash
cd api
composer install
cp .env.example .env          # 若尚无 .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate
php artisan storage:link      # 可选照片上传
php artisan serve --host=127.0.0.1 --port=8000
```

接口前缀：`http://127.0.0.1:8000/api`

## 写入一条演示纪念页并打印 token

另开终端：

```bash
cd api
php artisan memorial:demo
```

成功后会打印类似：

```
演示纪念页已就绪：
  token      : demo-token-0001
  小程序路径 : /pages/memorial/detail?token=demo-token-0001
  公开接口   : GET /api/memorials/demo-token-0001
```

公开读取（**无需登录**）：

```bash
curl http://127.0.0.1:8000/api/memorials/demo-token-0001
```

## 开发 mock 登录（无真实 AppID）

当 `WECHAT_MOCK_LOGIN=true`（本地默认）：

```bash
curl -X POST http://127.0.0.1:8000/api/auth/wechat \
  -H 'Content-Type: application/json' \
  -d '{"code":"dev-mock"}'
```

或等价入口：

```bash
curl -X POST http://127.0.0.1:8000/api/auth/dev
```

返回 `token` 后，供奉/留言/创建需带：

```
Authorization: Bearer <token>
```

小程序端 `miniapp/src/utils/config.js` 里 `MOCK_LOGIN = true` 时，会自动使用 `code=dev-mock`，无需配置真实 AppID。

接入真实微信登录时：

1. `.env` 设置真实 `WECHAT_APPID` / `WECHAT_SECRET`
2. `WECHAT_MOCK_LOGIN=false`
3. `miniapp/src/utils/config.js` 设置 `MOCK_LOGIN = false`
4. `miniapp/src/manifest.json` 的 `mp-weixin.appid` 填小程序 AppID
5. 微信公众平台配置 request 合法域名（开发工具可勾选「不校验合法域名」）

## 用微信开发者工具打开小程序

1. 修改 `miniapp/src/utils/config.js` 的 `API_BASE`（本机默认 `http://127.0.0.1:8000/api`；真机预览改为电脑局域网 IP）。
2. 编译到微信小程序：

```bash
cd miniapp
npm install
npm run dev:mp-weixin
```

3. 打开 **微信开发者工具** → 导入项目 → 目录选：

```
miniapp/dist/dev/mp-weixin
```

4. AppID 可选测试号；并勾选 **不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书**。
5. 编译器会持续输出到该目录，改代码后开发者工具会刷新。

也可用 HBuilderX 打开整个 `miniapp/` 目录，运行到微信开发者工具（CLI 项目会使用项目内编译器）。

可选：浏览器预览同一套 uni-app（非微信开发者工具验收必需，便于无 DevTools 时看页面）：

```bash
cd miniapp
npm run dev:h5
```

然后打开：

- 首页 `http://localhost:5173/#/`
- 演示纪念页 `http://localhost:5173/#/pages/memorial/detail?token=demo-token-0001`
- 无效 token `http://localhost:5173/#/pages/memorial/detail?token=not-a-token`

## QA 冒烟（约 3 分钟）

准备：API 已启动，且已执行 `php artisan memorial:demo`。

### 未登录公开阅读

1. 开发者工具中打开  
   `pages/memorial/detail?token=demo-token-0001`  
   或首页输入 token `demo-token-0001` 进入。
2. 应看到姓名、忌日、供奉计数、留言列表。
3. 首页点「退出登录」，确认状态为未登录。

### 未登录供奉 / 留言 → 先登录再完成

1. 保持未登录，在纪念页点「上香 / 点烛 / 献花」或发送留言。
2. 开发环境会自动 mock 登录，然后完成该操作，计数或留言立即更新。

### 登录后创建纪念页

1. 首页「创建纪念页」。
2. 姓名、忌日必填；空提交会被拒绝。
3. 成功后进入新纪念页，可复制 `share_path`（形如 `/pages/memorial/detail?token=xxxx`）。

### 校验

- 供奉三类分别 +1。
- 空留言、超过 200 字留言被拒绝。
- 无效 token（如 `not-a-token`）显示「纪念页不存在或链接已失效」，不是白屏。
- 公开 GET 不需要 Authorization；创建/供奉/留言不带 token 返回 **401**。

## API 一览

| 方法 | 路径 | 鉴权 |
| --- | --- | --- |
| `POST` | `/api/auth/wechat` | 否，body: `{ "code": "..." }` |
| `POST` | `/api/auth/dev` | 否，仅 `WECHAT_MOCK_LOGIN=true` |
| `GET` | `/api/memorials/{token}` | 否 |
| `POST` | `/api/memorials` | 是，body: `name`, `death_anniversary`，可选 `photo` / `photo_url` |
| `POST` | `/api/memorials/{id}/offerings` | 是，body: `{ "type": "incense\|candle\|flower" }` |
| `POST` | `/api/memorials/{id}/messages` | 是，body: `{ "content": "..." }` 最长 200 字 |

## 测试

```bash
cd api
php artisan test
```
