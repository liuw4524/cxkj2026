export const MISSING_TARGET_MESSAGE = '目标场景已不存在';

export function resolveHotspotJump(hotspot, scenes) {
  if (!hotspot || hotspot.target_available === false || hotspot.target_scene_id == null) {
    return { ok: false, message: MISSING_TARGET_MESSAGE };
  }

  const scene = (scenes || []).find((item) => item.id === hotspot.target_scene_id);

  if (!scene || !scene.image_url) {
    return { ok: false, message: MISSING_TARGET_MESSAGE };
  }

  return { ok: true, scene };
}

export function findEntryScene(scenes) {
  if (!scenes?.length) {
    return null;
  }

  return scenes.find((scene) => scene.is_entry) || [...scenes].sort((a, b) => a.sort_order - b.sort_order)[0];
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
