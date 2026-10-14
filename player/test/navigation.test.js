import test from 'node:test';
import assert from 'node:assert/strict';
import {
  findEntryScene,
  findEntryStandpoint,
  planWalkTransition,
  resolveHotspotJump,
  WALK_MAX_MS,
  WALK_MIN_MS,
} from '../src/navigation.js';

const scenes = [
  { id: 1, name: '客厅', image_url: '/a.jpg', sort_order: 0, is_entry: true },
  { id: 2, name: '卧室', image_url: '/b.jpg', sort_order: 1, is_entry: false },
];

const walkScenes = [
  {
    id: 1,
    name: '客厅',
    image_url: '/room.jpg',
    sort_order: 0,
    is_entry: true,
    standpoints: [
      standpoint(11, '门口', 0, '/s1.jpg', true, 12),
      standpoint(12, '茶几', 1.6, '/s2.jpg', false, 13),
      standpoint(13, '窗边', 3.2, '/s3.jpg', false, 14),
      standpoint(14, '阳台', 4.8, '/s4.jpg', false, null),
    ],
  },
];

function standpoint(id, name, y, image, isEntry, nextId) {
  return {
    id,
    name,
    image_url: image,
    position_x: 0,
    position_y: y,
    yaw: 0,
    pitch: 0,
    sort_order: id - 11,
    is_entry: isEntry,
    hotspots: nextId ? [{
      id: id + 100,
      title: '向前走',
      yaw: 0,
      pitch: -0.42,
      target_kind: 'standpoint',
      target_standpoint_id: nextId,
      target_scene_id: 1,
      target_available: true,
    }] : [],
  };
}

test('热点指向存在的场景时可以跳转', () => {
  const result = resolveHotspotJump({
    id: 9,
    title: '去卧室',
    target_scene_id: 2,
    target_available: true,
  }, scenes);

  assert.equal(result.ok, true);
  assert.equal(result.kind, 'scene');
  assert.equal(result.scene.name, '卧室');
  assert.equal(result.standpoint.image_url, '/b.jpg');
});

test('目标场景已删除时给出提示且不跳转', () => {
  const result = resolveHotspotJump({
    id: 9,
    title: '去卧室',
    target_scene_id: null,
    target_available: false,
  }, scenes);

  assert.equal(result.ok, false);
  assert.equal(result.message, '目标场景已不存在');
});

test('目标 id 不在场景列表中时同样失败', () => {
  const result = resolveHotspotJump({
    id: 9,
    title: '去阳台',
    target_scene_id: 99,
    target_available: true,
  }, scenes);

  assert.equal(result.ok, false);
  assert.equal(result.message, '目标场景已不存在');
});

test('没有标记初始场景时按排序取第一张', () => {
  const scene = findEntryScene([
    { id: 3, name: '厨房', sort_order: 2, is_entry: false },
    { id: 2, name: '卧室', sort_order: 0, is_entry: false },
  ]);

  assert.equal(scene.id, 2);
});

test('没有站位数据时退回场景全景，避免白屏', () => {
  const standpoint = findEntryStandpoint(scenes[0]);
  assert.equal(standpoint.image_url, '/a.jpg');
  assert.equal(standpoint.name, '客厅');
});

test('目标站位已删除时提示且不跳转', () => {
  const result = resolveHotspotJump({
    id: 9,
    title: '向前走',
    target_kind: 'standpoint',
    target_standpoint_id: null,
    target_scene_id: 1,
    target_available: false,
  }, walkScenes);

  assert.equal(result.ok, false);
  assert.equal(result.message, '目标站位已不存在');
  assert.equal(result.scene, undefined);
});

test('连续三次向前走都落到下一站位，过渡为淡入且不打开加载遮罩', () => {
  let current = findEntryStandpoint(walkScenes[0]);
  assert.equal(current.name, '门口');
  const names = [];

  for (let step = 0; step < 3; step += 1) {
    const hotspot = current.hotspots.find((item) => item.title === '向前走');
    const result = resolveHotspotJump(hotspot, walkScenes);
    assert.equal(result.ok, true);
    assert.equal(result.kind, 'standpoint');
    const plan = planWalkTransition(current, result.standpoint, hotspot);
    assert.equal(plan.effect, 'fade');
    assert.equal(plan.showLoader, false);
    assert.ok(plan.durationMs >= WALK_MIN_MS && plan.durationMs <= WALK_MAX_MS);
    assert.ok(plan.approachMs + plan.fadeMs === plan.durationMs);
    assert.ok(plan.translate.distance > 0);
    assert.notEqual(plan.effect, 'black');
    names.push(result.standpoint.name);
    current = result.standpoint;
  }

  assert.deepEqual(names, ['茶几', '窗边', '阳台']);
});
