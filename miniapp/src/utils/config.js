export const API_BASE = 'http://127.0.0.1:8000/api'

// QA 无真实 AppID 时保持 true，登录走 POST /api/auth/wechat { code: "dev-mock" }
export const MOCK_LOGIN = true
