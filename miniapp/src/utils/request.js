import { API_BASE } from './config.js'
import { clearAuth, getToken } from './auth.js'

function firstErrorMessage(data, fallback) {
  if (!data) {
    return fallback
  }
  if (typeof data.message === 'string' && data.message) {
    return data.message
  }
  if (data.errors && typeof data.errors === 'object') {
    const first = Object.values(data.errors)[0]
    if (Array.isArray(first) && first[0]) {
      return first[0]
    }
  }
  return fallback
}

export function request({ url, method = 'GET', data } = {}) {
  const header = {
    Accept: 'application/json',
  }
  const token = getToken()
  if (token) {
    header.Authorization = 'Bearer ' + token
  }

  return new Promise((resolve, reject) => {
    uni.request({
      url: API_BASE + url,
      method,
      data,
      header,
      success(res) {
        if (res.statusCode === 401) {
          clearAuth()
          reject({
            statusCode: 401,
            message: firstErrorMessage(res.data, '未登录'),
            data: res.data,
          })
          return
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
          return
        }
        reject({
          statusCode: res.statusCode,
          message: firstErrorMessage(res.data, '请求失败'),
          data: res.data,
        })
      },
      fail(err) {
        reject({
          statusCode: 0,
          message: '网络异常，请确认 API 已启动',
          data: err,
        })
      },
    })
  })
}

export function uploadMemorial({ filePath, name, deathAnniversary }) {
  const header = {
    Accept: 'application/json',
  }
  const token = getToken()
  if (token) {
    header.Authorization = 'Bearer ' + token
  }

  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: API_BASE + '/memorials',
      filePath,
      name: 'photo',
      formData: {
        name,
        death_anniversary: deathAnniversary,
      },
      header,
      success(res) {
        let payload = res.data
        if (typeof payload === 'string') {
          try {
            payload = JSON.parse(payload)
          } catch (e) {
            payload = { message: payload }
          }
        }
        if (res.statusCode === 401) {
          clearAuth()
          reject({
            statusCode: 401,
            message: firstErrorMessage(payload, '未登录'),
            data: payload,
          })
          return
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(payload)
          return
        }
        reject({
          statusCode: res.statusCode,
          message: firstErrorMessage(payload, '创建失败'),
          data: payload,
        })
      },
      fail(err) {
        reject({
          statusCode: 0,
          message: '网络异常，请确认 API 已启动',
          data: err,
        })
      },
    })
  })
}
