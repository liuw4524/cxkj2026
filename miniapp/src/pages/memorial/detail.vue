<template>
  <view class="page">
    <view v-if="error" class="card error-card">
      <text class="error-title">无法打开纪念页</text>
      <text class="error-text">{{ error }}</text>
      <button class="btn-primary" @click="goHome">返回首页</button>
    </view>

    <view v-else-if="loading" class="muted center loading">加载中…</view>

    <view v-else-if="memorial">
      <view class="card header">
        <image v-if="memorial.photo_url" class="avatar" :src="memorial.photo_url" mode="aspectFill" />
        <view v-else class="avatar fallback">念</view>
        <text class="name">{{ memorial.name }}</text>
        <text class="muted">忌日 {{ memorial.death_anniversary }}</text>
        <text class="share">可分享路径：{{ memorial.share_path }}</text>
        <button class="btn-ghost copy-btn" size="mini" @click="copySharePath">复制分享路径</button>
      </view>

      <view class="offer-row">
        <view class="offer card" @click="offer('incense')">
          <text class="offer-emoji">香</text>
          <text class="offer-name">上香</text>
          <text class="offer-count">{{ memorial.offerings.incense }}</text>
        </view>
        <view class="offer card" @click="offer('candle')">
          <text class="offer-emoji">烛</text>
          <text class="offer-name">点烛</text>
          <text class="offer-count">{{ memorial.offerings.candle }}</text>
        </view>
        <view class="offer card" @click="offer('flower')">
          <text class="offer-emoji">花</text>
          <text class="offer-name">献花</text>
          <text class="offer-count">{{ memorial.offerings.flower }}</text>
        </view>
      </view>

      <view class="card">
        <text class="section-title">留言</text>
        <textarea
          class="textarea"
          v-model="draft"
          maxlength="200"
          placeholder="写下想念，最多 200 字"
          placeholder-class="placeholder"
        />
        <view class="counter">{{ draft.length }}/200</view>
        <button class="btn-primary" :loading="sending" @click="sendMessage">送上留言</button>
      </view>

      <view class="card timeline">
        <text class="section-title">亲友留言（最新在前）</text>
        <view v-if="!memorial.messages.length" class="muted empty">还没有留言</view>
        <view v-for="item in memorial.messages" :key="item.id" class="message">
          <text class="message-meta">{{ item.author_name }} · {{ formatTime(item.created_at) }}</text>
          <text class="message-body">{{ item.content }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { ensureLogin } from '../../utils/login.js'
import { request } from '../../utils/request.js'

export default {
  data() {
    return {
      token: '',
      memorial: null,
      loading: false,
      error: '',
      draft: '',
      sending: false,
      offering: false,
    }
  },
  onLoad(query) {
    this.token = (query && query.token) || ''
    this.fetchMemorial()
  },
  onShareAppMessage() {
    const name = this.memorial ? this.memorial.name : '云祭祀'
    return {
      title: name + '的纪念页',
      path: this.memorial ? this.memorial.share_path : '/pages/index/index',
    }
  },
  methods: {
    async fetchMemorial() {
      if (!this.token) {
        this.error = '纪念页不存在或链接已失效'
        this.memorial = null
        return
      }
      this.loading = true
      this.error = ''
      try {
        this.memorial = await request({ url: '/memorials/' + encodeURIComponent(this.token) })
      } catch (err) {
        this.memorial = null
        this.error = err.message || '纪念页不存在或链接已失效'
      } finally {
        this.loading = false
      }
    },
    async offer(type) {
      if (!this.memorial || this.offering) {
        return
      }
      this.offering = true
      try {
        await ensureLogin()
        this.memorial = await request({
          url: '/memorials/' + this.memorial.id + '/offerings',
          method: 'POST',
          data: { type },
        })
        const labels = { incense: '已上香', candle: '已点烛', flower: '已献花' }
        uni.showToast({ title: labels[type] || '已供奉', icon: 'success' })
      } catch (err) {
        uni.showToast({ title: err.message || '供奉失败', icon: 'none' })
      } finally {
        this.offering = false
      }
    },
    async sendMessage() {
      if (!this.memorial || this.sending) {
        return
      }
      const content = this.draft.trim()
      if (!content) {
        uni.showToast({ title: '请填写留言', icon: 'none' })
        return
      }
      if (content.length > 200) {
        uni.showToast({ title: '留言不能超过200字', icon: 'none' })
        return
      }
      this.sending = true
      try {
        await ensureLogin()
        this.memorial = await request({
          url: '/memorials/' + this.memorial.id + '/messages',
          method: 'POST',
          data: { content },
        })
        this.draft = ''
        uni.showToast({ title: '留言已送出', icon: 'success' })
      } catch (err) {
        uni.showToast({ title: err.message || '留言失败', icon: 'none' })
      } finally {
        this.sending = false
      }
    },
    copySharePath() {
      if (!this.memorial) {
        return
      }
      uni.setClipboardData({
        data: this.memorial.share_path,
      })
    },
    goHome() {
      uni.reLaunch({ url: '/pages/index/index' })
    },
    formatTime(value) {
      if (!value) {
        return ''
      }
      return String(value).replace('T', ' ').slice(0, 16)
    },
  },
}
</script>

<style>
.loading {
  padding: 80rpx 0;
}

.error-card {
  text-align: center;
  padding: 64rpx 40rpx;
}

.error-title {
  display: block;
  font-size: 40rpx;
  font-weight: 600;
  margin-bottom: 16rpx;
}

.error-text {
  display: block;
  color: #8a7a68;
  margin-bottom: 40rpx;
  line-height: 1.6;
}

.header {
  text-align: center;
  margin-bottom: 24rpx;
}

.avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  margin: 0 auto 16rpx;
  background: #efe6d8;
}

.fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c4a574;
  font-size: 48rpx;
}

.name {
  display: block;
  font-size: 44rpx;
  font-weight: 600;
  margin-bottom: 8rpx;
}

.share {
  display: block;
  margin: 16rpx 0 12rpx;
  font-size: 22rpx;
  color: #8a7a68;
  word-break: break-all;
}

.copy-btn {
  display: inline-block;
}

.offer-row {
  display: flex;
  gap: 16rpx;
  margin-bottom: 24rpx;
}

.offer {
  flex: 1;
  text-align: center;
  padding: 24rpx 8rpx;
}

.offer-emoji {
  display: block;
  font-size: 32rpx;
  color: #c4a574;
}

.offer-name {
  display: block;
  margin: 8rpx 0;
}

.offer-count {
  display: block;
  font-size: 36rpx;
  font-weight: 600;
}

.section-title {
  display: block;
  font-size: 30rpx;
  font-weight: 600;
  margin-bottom: 16rpx;
}

.textarea {
  width: 100%;
  min-height: 160rpx;
  background: #f4efe6;
  border-radius: 16rpx;
  padding: 20rpx;
  box-sizing: border-box;
  font-size: 28rpx;
}

.placeholder {
  color: #b3a394;
}

.counter {
  text-align: right;
  color: #8a7a68;
  font-size: 22rpx;
  margin: 8rpx 0 16rpx;
}

.timeline {
  margin-top: 24rpx;
}

.empty {
  padding: 24rpx 0;
}

.message {
  padding: 20rpx 0;
  border-top: 1rpx solid #efe6d8;
}

.message-meta {
  display: block;
  color: #8a7a68;
  font-size: 22rpx;
  margin-bottom: 8rpx;
}

.message-body {
  display: block;
  font-size: 28rpx;
  line-height: 1.6;
}
</style>
