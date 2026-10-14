export const MISSING_TARGET_MESSAGE = '目标场景已不存在';
export const MISSING_STANDPOINT_MESSAGE = '目标站位已不存在';
export const WALK_MIN_MS = 500;
export const WALK_MAX_MS = 1000;

export function resolveHotspotJump(hotspot, scenes) {
  if (!hotspot) {
    return { ok: false, message: MISSING_TARGET_MESSAGE };
  }

  if (hotspot.target_kind === 'standpoint') {
    if (hotspot.target_available === false || hotspot.target_standpoint_id == null) {
      return { ok: false, message: MISSING_STANDPOINT_MESSAGE };
    }

    for (const scene of scenes || []) {
      const standpoint = (scene.standpoints || []).find((item) => item.id === hotspot.target_standpoint_id);

      if (!standpoint) {
        continue;
      }

      const image = standpoint.image_url || scene.image_url;

      if (!image) {
        return { ok: false, message: MISSING_STANDPOINT_MESSAGE };
      }

      return {
        ok: true,
        kind: 'standpoint',
        scene,
        standpoint: {
          ...standpoint,
          image_url: image,
          hotspots: standpoint.hotspots || [],
        },
      };
    }

    return { ok: false, message: MISSING_STANDPOINT_MESSAGE };
  }

  if (hotspot.target_available === false || hotspot.target_scene_id == null) {
    return { ok: false, message: MISSING_TARGET_MESSAGE };
  }

  const scene = (scenes || []).find((item) => item.id === hotspot.target_scene_id);
  const standpoint = scene ? findEntryStandpoint(scene) : null;

  if (!scene || !standpoint?.image_url) {
    return { ok: false, message: MISSING_TARGET_MESSAGE };
  }

  return { ok: true, kind: 'scene', scene, standpoint };
}

export function findEntryScene(scenes) {
  if (!scenes?.length) {
    return null;
  }

  return scenes.find((scene) => scene.is_entry) || [...scenes].sort((a, b) => a.sort_order - b.sort_order)[0];
}

export function findEntryStandpoint(scene) {
  if (!scene) {
    return null;
  }

  const list = Array.isArray(scene.standpoints) ? scene.standpoints : [];
  const chosen = list.find((item) => item.is_entry)
    || [...list].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0) || (a.id ?? 0) - (b.id ?? 0))[0];

  if (chosen) {
    return {
      ...chosen,
      image_url: chosen.image_url || scene.image_url,
      thumbnail_url: chosen.thumbnail_url || scene.thumbnail_url || chosen.image_url || scene.image_url,
      hotspots: chosen.hotspots || [],
    };
  }

  return {
    id: null,
    scene_id: scene.id,
    name: scene.name,
    image_url: scene.image_url,
    thumbnail_url: scene.thumbnail_url || scene.image_url,
    position_x: 0,
    position_y: 0,
    yaw: 0,
    pitch: 0,
    sort_order: 0,
    is_entry: true,
    hotspots: scene.hotspots || [],
  };
}

export function planWalkTransition(from, to, hotspot) {
  const dx = number(to?.position_x) - number(from?.position_x);
  const dy = number(to?.position_y) - number(from?.position_y);
  const distance = Math.hypot(dx, dy);
  const durationMs = clamp(Math.round(560 + distance * 80), WALK_MIN_MS, WALK_MAX_MS);
  const approachMs = Math.round(durationMs * 0.42);
  const fadeMs = durationMs - approachMs;
  const approachYaw = hotspot?.yaw ?? normalizeAngle(Math.atan2(dx, dy) - number(from?.yaw));
  const approachPitch = hotspot?.pitch ?? -0.2;

  return {
    durationMs,
    approachMs,
    fadeMs,
    effect: 'fade',
    showLoader: false,
    translate: { x: dx, y: dy, distance },
    approach: {
      yaw: approachYaw,
      pitch: Math.min(approachPitch, -0.05),
      zoom: 46,
    },
    landing: {
      yaw: number(to?.yaw),
      pitch: number(to?.pitch),
      zoom: 30,
    },
  };
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeAngle(radians) {
  const turn = Math.PI * 2;
  let value = radians;
  while (value > Math.PI) value -= turn;
  while (value < -Math.PI) value += turn;
  return value;
}
