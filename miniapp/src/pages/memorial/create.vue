<template>
  <view class="page">
    <view class="card">
      <text class="lead">填写逝者姓名与忌日，即可生成可分享的纪念页。</text>

      <text class="label">逝者姓名 *</text>
      <input class="input" v-model="name" maxlength="50" placeholder="请输入姓名" placeholder-class="placeholder" />

      <text class="label">忌日 *</text>
      <picker mode="date" :value="anniversary" @change="onDateChange">
        <view class="input picker">{{ anniversary || '请选择忌日' }}</view>
      </picker>

      <text class="label">照片（可选）</text>
      <view class="photo-row" @click="choosePhoto">
        <image v-if="photoPath" class="photo" :src="photoPath" mode="aspectFill" />
        <view v-else class="photo placeholder-photo">点击选择照片</view>
      </view>

      <button class="btn-primary submit" :loading="submitting" @click="submit">生成纪念页</button>
      <text class="muted hint">创建需要登录。开发环境将自动使用 mock 登录。</text>
    </view>
  </view>
</template>

<script>
import { ensureLogin } from '../../utils/login.js'
import { request, uploadMemorial } from '../../utils/request.js'

export default {
  data() {
    return {
      name: '',
      anniversary: '',
      photoPath: '',
      submitting: false,
    }
  },
  methods: {
    onDateChange(e) {
      this.anniversary = e.detail.value
    },
    choosePhoto() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        success: (res) => {
          this.photoPath = res.tempFilePaths[0]
        },
      })
    },
    async submit() {
      const name = this.name.trim()
      if (!name) {
        uni.showToast({ title: '请填写逝者姓名', icon: 'none' })
        return
      }
      if (!this.anniversary) {
        uni.showToast({ title: '请选择忌日', icon: 'none' })
        return
      }

      this.submitting = true
      try {
        await ensureLogin()
        let memorial
        if (this.photoPath) {
          memorial = await uploadMemorial({
            filePath: this.photoPath,
            name,
            deathAnniversary: this.anniversary,
          })
        } else {
          memorial = await request({
            url: '/memorials',
            method: 'POST',
            data: {
              name,
              death_anniversary: this.anniversary,
            },
          })
        }
        uni.showToast({ title: '已创建', icon: 'success' })
        setTimeout(() => {
          uni.redirectTo({
            url: '/pages/memorial/detail?token=' + encodeURIComponent(memorial.token),
          })
        }, 300)
      } catch (err) {
        uni.showToast({ title: err.message || '创建失败', icon: 'none' })
      } finally {
        this.submitting = false
      }
    },
  },
}
</script>

<style>
.lead {
  display: block;
  font-size: 28rpx;
  line-height: 1.6;
  margin-bottom: 32rpx;
}

.label {
  display: block;
  margin: 18rpx 0 12rpx;
  font-size: 26rpx;
  color: #6d5c4d;
}

.input {
  background: #f4efe6;
  border-radius: 16rpx;
  padding: 20rpx 24rpx;
  font-size: 30rpx;
}

.picker {
  color: #3d2b1f;
}

.placeholder {
  color: #b3a394;
}

.photo-row {
  margin-bottom: 12rpx;
}

.photo,
.placeholder-photo {
  width: 220rpx;
  height: 220rpx;
  border-radius: 16rpx;
  background: #efe6d8;
}

.placeholder-photo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a7a68;
  font-size: 24rpx;
}

.submit {
  margin-top: 36rpx;
}

.hint {
  display: block;
  margin-top: 16rpx;
  font-size: 24rpx;
}
</style>
