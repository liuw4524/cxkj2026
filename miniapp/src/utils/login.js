import { MOCK_LOGIN } from './config.js'
import { isLoggedIn, saveSession } from './auth.js'
import { request } from './request.js'

function uniLogin() {
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: resolve,
      fail: reject,
    })
  })
}

export async function login() {
  let code = 'dev-mock'

  if (!MOCK_LOGIN) {
    const loginRes = await uniLogin()
    if (!loginRes.code) {
      throw new Error('未获取到微信登录 code')
    }
    code = loginRes.code
  }

  const payload = await request({
    url: '/auth/wechat',
    method: 'POST',
    data: { code },
  })
  saveSession(payload)
  return payload
}

export async function ensureLogin() {
  if (isLoggedIn()) {
    return true
  }
  uni.showLoading({ title: '正在登录', mask: true })
  try {
    await login()
    return true
  } finally {
    uni.hideLoading()
  }
}
