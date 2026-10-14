import test from 'node:test';
import assert from 'node:assert/strict';
import { createTransitionGate, runWalkTransition } from '../src/transition.js';

const from = {
  name: '门口',
  image_url: '/s1.jpg',
  position_x: 0,
  position_y: 0,
  yaw: 0,
  pitch: 0,
};

const to = {
  name: '茶几',
  image_url: '/s2.jpg',
  position_x: 0,
  position_y: 1.6,
  yaw: 0.1,
  pitch: -0.02,
};

const hotspot = { yaw: 0, pitch: -0.42, title: '向前走' };

test('走动先平移镜头，再用淡入换图，且不显示加载层', async () => {
  const calls = [];
  const plan = await runWalkTransition({
    from,
    to,
    hotspot,
    animate: async (options) => {
      calls.push(['animate', options]);
    },
    setPanorama: async (url, options) => {
      calls.push(['pano', url, options]);
      return true;
    },
  });

  assert.equal(calls[0][0], 'animate');
  assert.equal(calls[1][0], 'pano');
  assert.equal(calls[1][1], '/s2.jpg');
  assert.equal(calls[1][2].showLoader, false);
  assert.equal(calls[1][2].transition.effect, 'fade');
  assert.notEqual(calls[1][2].transition.effect, 'black');
  assert.equal(calls[1][2].transition.speed, plan.fadeMs);
  assert.equal(calls[0][1].speed, plan.approachMs);
  assert.ok(plan.durationMs >= 500 && plan.durationMs <= 1000);
});

test('过渡进行中再次触发会被跳过，结束后可以继续', async () => {
  const gate = createTransitionGate();
  let release;
  const first = gate.run(() => new Promise((resolve) => {
    release = resolve;
  }));
  const second = await gate.run(async () => 'next');
  assert.equal(second.skipped, true);
  assert.equal(gate.active, true);
  release('done');
  const finished = await first;
  assert.equal(finished.skipped, false);
  assert.equal(finished.value, 'done');
  assert.equal(gate.active, false);

  const third = await gate.run(async () => 'again');
  assert.equal(third.skipped, false);
  assert.equal(third.value, 'again');
});

test('过渡抛错后锁会放开，避免页面卡死', async () => {
  const gate = createTransitionGate();
  await assert.rejects(() => gate.run(async () => {
    throw new Error('加载失败');
  }));
  assert.equal(gate.active, false);
  const next = await gate.run(async () => 'ok');
  assert.equal(next.value, 'ok');
});
