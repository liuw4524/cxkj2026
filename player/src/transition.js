import { planWalkTransition } from './navigation.js';

export function createTransitionGate() {
  let active = false;

  return {
    get active() {
      return active;
    },
    async run(task) {
      if (active) {
        return { skipped: true };
      }

      active = true;

      try {
        const value = await task();
        return { skipped: false, value };
      } finally {
        active = false;
      }
    },
  };
}

export async function runWalkTransition({ from, to, hotspot, animate, setPanorama }) {
  const plan = planWalkTransition(from, to, hotspot);

  if (!to?.image_url) {
    const error = new Error('目标站位没有全景图');
    error.code = 'missing-image';
    throw error;
  }

  await animate({
    yaw: plan.approach.yaw,
    pitch: plan.approach.pitch,
    zoom: plan.approach.zoom,
    speed: plan.approachMs,
  });

  const loaded = await setPanorama(to.image_url, {
    showLoader: false,
    position: { yaw: plan.landing.yaw, pitch: plan.landing.pitch },
    zoom: plan.landing.zoom,
    transition: {
      speed: plan.fadeMs,
      effect: plan.effect,
      rotation: true,
    },
  });

  if (loaded === false) {
    const error = new Error('过渡被中断');
    error.code = 'aborted';
    throw error;
  }

  return plan;
}
