<template>
  <view class="page">
    <view class="hero card">
      <text class="eyebrow">Cloud Memorial · MVP</text>
      <text class="title">云祭祀</text>
      <text class="muted subtitle">点燃一炷香，留下一句想念。</text>
    </view>

    <button class="btn-primary create-btn" @click="goCreate">创建纪念页</button>

    <view class="card enter-card">
      <text class="label">通过分享链接进入</text>
      <input
        class="input"
        v-model="token"
        placeholder="粘贴 token 或完整小程序路径"
        placeholder-class="placeholder"
      />
      <button class="btn-ghost" @click="enterByToken">进入纪念页</button>
      <text class="muted hint">公开纪念页无需登录即可查看。供奉与留言会先登录再完成。</text>
    </view>

    <view class="card qa-card">
      <view class="qa-row">
        <text class="qa-label">登录状态</text>
        <text class="qa-value">{{ loggedIn ? '已登录' : '未登录' }}</text>
      </view>
      <view class="qa-actions">
        <button class="mini-btn" size="mini" @click="doLogin">微信登录</button>
        <button class="mini-btn" size="mini" @click="doLogout">退出登录</button>
      </view>
      <text class="muted hint">开发环境默认 mock 登录（code=dev-mock），无需真实 AppID。</text>
    </view>
  </view>
</template>

<script>
import { isLoggedIn, logout } from '../../utils/auth.js'
import { ensureLogin } from '../../utils/login.js'

export default {
  data() {
    return {
      token: '',
      loggedIn: false,
    }
  },
  onShow() {
    this.refreshAuth()
  },
  methods: {
    refreshAuth() {
      this.loggedIn = isLoggedIn()
    },
    goCreate() {
      uni.navigateTo({ url: '/pages/memorial/create' })
    },
    parseToken(raw) {
      const value = (raw || '').trim()
      if (!value) {
        return ''
      }
      const queryMatch = value.match(/[?&]token=([^&]+)/)
      if (queryMatch) {
        return decodeURIComponent(queryMatch[1])
      }
      return value
    },
    enterByToken() {
      const token = this.parseToken(this.token)
      if (!token) {
        uni.showToast({ title: '请填写纪念页 token', icon: 'none' })
        return
      }
      uni.navigateTo({ url: '/pages/memorial/detail?token=' + encodeURIComponent(token) })
    },
    async doLogin() {
      try {
        await ensureLogin()
        this.refreshAuth()
        uni.showToast({ title: '登录成功', icon: 'success' })
      } catch (err) {
        uni.showToast({ title: err.message || '登录失败', icon: 'none' })
      }
    },
    doLogout() {
      logout()
      this.refreshAuth()
      uni.showToast({ title: '已退出', icon: 'none' })
    },
  },
}
</script>

<style>
.hero {
  padding: 48rpx 36rpx 40rpx;
  margin-bottom: 32rpx;
}

.eyebrow {
  display: block;
  font-size: 22rpx;
  letter-spacing: 4rpx;
  color: #c4a574;
  text-transform: uppercase;
}

.title {
  display: block;
  font-size: 64rpx;
  font-weight: 600;
  margin: 16rpx 0 12rpx;
}

.subtitle {
  font-size: 28rpx;
}

.create-btn {
  margin-bottom: 32rpx;
}

.enter-card,
.qa-card {
  margin-bottom: 24rpx;
}

.label {
  display: block;
  font-size: 28rpx;
  margin-bottom: 16rpx;
}

.input {
  background: #f4efe6;
  border-radius: 16rpx;
  padding: 20rpx 24rpx;
  margin-bottom: 20rpx;
  font-size: 28rpx;
}

.placeholder {
  color: #b3a394;
}

.hint {
  display: block;
  margin-top: 16rpx;
  font-size: 24rpx;
  line-height: 1.6;
}

.qa-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16rpx;
}

.qa-label {
  color: #8a7a68;
}

.qa-value {
  font-weight: 600;
}

.qa-actions {
  display: flex;
  gap: 16rpx;
}

.mini-btn {
  flex: 1;
  background: #efe6d8;
  color: #3d2b1f;
}
</style>
