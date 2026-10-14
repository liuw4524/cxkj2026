import test from 'node:test';
import assert from 'node:assert/strict';
import { findEntryScene, resolveHotspotJump } from '../src/navigation.js';

const scenes = [
  { id: 1, name: '客厅', image_url: '/a.jpg', sort_order: 0, is_entry: true },
  { id: 2, name: '卧室', image_url: '/b.jpg', sort_order: 1, is_entry: false },
];

test('热点指向存在的场景时可以跳转', () => {
  const result = resolveHotspotJump({
    id: 9,
    title: '去卧室',
    target_scene_id: 2,
    target_available: true,
  }, scenes);

  assert.equal(result.ok, true);
  assert.equal(result.scene.name, '卧室');
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
