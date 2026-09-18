const TOKEN_KEY = 'token'
const USER_KEY = 'user'

export function getToken() {
  return uni.getStorageSync(TOKEN_KEY) || ''
}

export function getUser() {
  return uni.getStorageSync(USER_KEY) || null
}

export function isLoggedIn() {
  return !!getToken()
}

export function saveSession(payload) {
  uni.setStorageSync(TOKEN_KEY, payload.token)
  uni.setStorageSync(USER_KEY, payload.user || null)
}

export function clearAuth() {
  uni.removeStorageSync(TOKEN_KEY)
  uni.removeStorageSync(USER_KEY)
}

export function logout() {
  clearAuth()
}
