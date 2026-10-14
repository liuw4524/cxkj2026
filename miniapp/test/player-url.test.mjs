import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPlayerPageUrl } from '../src/utils/player-url.js';

test('分享码拼出与浏览器相同的播放页', () => {
  assert.equal(
    buildPlayerPageUrl({ baseUrl: 'https://pano.example.com/', code: 'demo-tour' }),
    'https://pano.example.com/t/demo-tour',
  );
});

test('已经有完整链接时直接打开，不再拼分享码', () => {
  assert.equal(
    buildPlayerPageUrl({
      baseUrl: 'https://pano.example.com',
      code: 'ignored',
      url: 'https://pano.example.com/t/abc',
    }),
    'https://pano.example.com/t/abc',
  );
});

test('没有分享码也没有链接时不打开空白 web-view', () => {
  assert.equal(buildPlayerPageUrl({ baseUrl: 'https://pano.example.com' }), '');
});
