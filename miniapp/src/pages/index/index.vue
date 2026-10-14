<script setup>
import { ref } from 'vue';
import { PLAYER_BASE_URL } from '../../utils/config.js';

const code = ref('demo-tour');

function openTour() {
  const shareCode = code.value.trim();
  if (!shareCode) {
    uni.showToast({ title: '请填写分享码', icon: 'none' });
    return;
  }

  uni.navigateTo({
    url: `/pages/webview/webview?code=${encodeURIComponent(shareCode)}`,
  });
}
</script>

<template>
  <view class="page">
    <text class="title">全景漫游</text>
    <text class="desc">小程序只负责用 web-view 打开播放页。拖动、缩放和热点都在 H5 里完成，和手机浏览器是同一条链接。</text>
    <input class="input" v-model="code" placeholder="分享码，例如 demo-tour" />
    <button class="button" type="primary" @click="openTour">打开漫游</button>
    <text class="hint">播放器地址：{{ PLAYER_BASE_URL }}</text>
    <text class="hint">业务项目把分享链接填进自己的配置即可，不必改这里的播放器。</text>
  </view>
</template>

<style>
.page { padding: 32rpx; }
.title { display: block; font-size: 44rpx; font-weight: 700; margin-bottom: 16rpx; }
.desc, .hint { display: block; color: #57534e; line-height: 1.6; margin-bottom: 16rpx; }
.input { background: #fff; border-radius: 16rpx; padding: 20rpx; margin: 24rpx 0; }
.button { background: #0f766e; color: #fff; }
</style>
