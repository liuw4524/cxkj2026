<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { PLAYER_BASE_URL } from '../../utils/config.js';
import { buildPlayerPageUrl } from '../../utils/player-url.js';

const src = ref('');

onLoad((query = {}) => {
  const rawUrl = query.url ? decodeURIComponent(query.url) : '';
  src.value = buildPlayerPageUrl({
    baseUrl: PLAYER_BASE_URL,
    code: query.code || query.share_code || '',
    url: rawUrl,
  });
});
</script>

<template>
  <web-view v-if="src" :src="src" />
  <view v-else class="empty">缺少作品链接</view>
</template>

<style>
.empty { padding: 48rpx; color: #57534e; }
</style>
