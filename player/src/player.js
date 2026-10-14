import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { escapeHtml, findEntryScene, resolveHotspotJump } from './navigation.js';

const LANG = {
  zoom: '缩放',
  zoomOut: '缩小',
  zoomIn: '放大',
  moveUp: '向上',
  moveDown: '向下',
  moveLeft: '向左',
  moveRight: '向右',
  description: '说明',
  download: '下载',
  fullscreen: '全屏',
  loading: '正在加载全景…',
  menu: '菜单',
  close: '关闭',
  twoFingers: '使用双指拖动',
  ctrlZoom: '滚动鼠标滚轮可缩放',
  loadError: '全景加载失败',
  webglError: '当前浏览器似乎不支持 WebGL',
};

export async function mountPlayer(root, { shareCode, apiBase }) {
  if (!shareCode) {
    renderMessage(root, '缺少分享码', '请使用作品分享链接打开。');
    return;
  }

  renderShell(root);

  try {
    const tour = await fetchTour(apiBase, shareCode);
    startViewer(root, tour);
  } catch (error) {
    renderMessage(root, error.message || '作品加载失败', '请稍后重试。');
  }
}

async function fetchTour(apiBase, shareCode) {
  let response;

  try {
    response = await fetch(`${apiBase.replace(/\/$/, '')}/tours/${encodeURIComponent(shareCode)}`, {
      headers: { Accept: 'application/json' },
    });
  } catch {
    const error = new Error('网络异常，请重试');
    throw error;
  }

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.message || '作品加载失败');
  }

  return body;
}

function startViewer(root, tour) {
  const stage = root.querySelector('[data-stage]');
  const viewerEl = root.querySelector('[data-viewer]');
  const title = root.querySelector('[data-title]');
  const sceneName = root.querySelector('[data-scene-name]');
  const strip = root.querySelector('[data-strip]');
  const overlay = root.querySelector('[data-overlay]');
  const progress = root.querySelector('[data-progress]');
  const overlayText = root.querySelector('[data-overlay-text]');
  const retry = root.querySelector('[data-retry]');
  const toast = root.querySelector('[data-toast]');
  const entry = findEntryScene(tour.scenes);

  title.textContent = tour.name || '全景漫游';

  if (!entry) {
    showOverlay(overlay, overlayText, progress, '这个作品还没有可播放的场景', null, false);
    retry.hidden = true;
    return;
  }

  let current = entry;
  let viewer;
  let markers;
  let toastTimer;

  const showToast = (message) => {
    toast.hidden = false;
    toast.textContent = message;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2400);
  };

  const renderStrip = () => {
    strip.innerHTML = tour.scenes.map((scene) => `
      <button type="button" class="thumb ${scene.id === current.id ? 'is-active' : ''}" data-scene-id="${scene.id}">
        <img src="${escapeHtml(scene.thumbnail_url || scene.image_url)}" alt="${escapeHtml(scene.name)}">
        <span>${escapeHtml(scene.name)}</span>
      </button>
    `).join('');
  };

  const setLoading = (percent) => {
    retry.hidden = true;
    showOverlay(overlay, overlayText, progress, '正在加载全景…', percent, true);
  };

  const showError = () => {
    showOverlay(overlay, overlayText, progress, '全景加载失败', null, false);
    retry.hidden = false;
  };

  const hideOverlay = () => {
    overlay.hidden = true;
  };

  const applyMarkers = () => {
    markers?.setMarkers(markersFor(current));
  };

  const switchTo = async (scene, { bustCache = false } = {}) => {
    if (!scene?.image_url) {
      showError();
      return;
    }

    current = scene;
    sceneName.textContent = scene.name;
    renderStrip();
    setLoading(8);

    const panorama = bustCache ? cacheBust(scene.image_url) : scene.image_url;

    try {
      if (!viewer) {
        viewer = new Viewer({
          container: viewerEl,
          panorama,
          caption: scene.name,
          navbar: ['zoom', 'fullscreen'],
          lang: LANG,
          loadingTxt: '正在加载全景…',
          mousewheel: true,
          mousemove: true,
          touchmoveTwoFingers: false,
          defaultZoomLvl: 30,
          plugins: [
            MarkersPlugin.withConfig({
              clickEventOnMarker: false,
              markers: markersFor(scene),
            }),
          ],
        });
        markers = viewer.getPlugin(MarkersPlugin);
        viewer.addEventListener('load-progress', (event) => {
          if (!overlay.hidden) {
            setLoading(event.progress);
          }
        });
        viewer.addEventListener('panorama-loaded', () => {
          applyMarkers();
          hideOverlay();
        });
        viewer.addEventListener('panorama-error', () => {
          showError();
        });
        markers.addEventListener('select-marker', ({ marker }) => {
          const hotspot = current.hotspots.find((item) => String(item.id) === String(marker.id));
          const result = resolveHotspotJump(hotspot, tour.scenes);

          if (!result.ok) {
            showToast(result.message);
            return;
          }

          switchTo(result.scene);
        });
        return;
      }

      await viewer.setPanorama(panorama, {
        caption: scene.name,
        transition: { speed: 800, effect: 'fade' },
        showLoader: false,
      });
      applyMarkers();
      hideOverlay();
    } catch {
      showError();
    }
  };

  strip.addEventListener('click', (event) => {
    const button = event.target.closest('[data-scene-id]');

    if (!button) {
      return;
    }

    const scene = tour.scenes.find((item) => String(item.id) === button.dataset.sceneId);

    if (scene) {
      switchTo(scene);
    }
  });

  retry.addEventListener('click', () => {
    switchTo(current, { bustCache: true });
  });

  renderStrip();
  switchTo(entry);
  stage.dataset.ready = 'true';
}

function markersFor(scene) {
  return (scene.hotspots || []).map((hotspot) => ({
    id: String(hotspot.id),
    position: { yaw: hotspot.yaw, pitch: hotspot.pitch },
    anchor: 'bottom center',
    tooltip: hotspot.target_available ? hotspot.title : `${hotspot.title}（目标场景已不存在）`,
    html: `<button type="button" class="hotspot ${hotspot.target_available ? '' : 'is-missing'}">
      <span class="hotspot-dot"></span>
      <span class="hotspot-label">${escapeHtml(hotspot.title)}</span>
    </button>`,
  }));
}

function showOverlay(overlay, textNode, progressNode, message, percent, spinning) {
  overlay.hidden = false;
  textNode.textContent = message;
  progressNode.hidden = percent == null;
  if (percent != null) {
    const value = Math.max(0, Math.min(100, Math.round(percent)));
    progressNode.querySelector('span').style.width = `${value}%`;
    progressNode.dataset.value = `${value}%`;
  }
  overlay.classList.toggle('is-busy', spinning);
}

function cacheBust(url) {
  const next = new URL(url, window.location.origin);
  next.searchParams.set('retry', String(Date.now()));
  return next.toString();
}

function renderShell(root) {
  root.innerHTML = `
    <div class="shell">
      <header class="topbar">
        <strong data-title>全景漫游</strong>
        <span data-scene-name></span>
      </header>
      <div class="stage" data-stage>
        <div class="viewer" data-viewer></div>
        <div class="overlay" data-overlay>
          <p data-overlay-text>正在加载全景…</p>
          <div class="progress" data-progress hidden><span></span></div>
          <button type="button" data-retry hidden>重试</button>
        </div>
        <p class="hint">单指拖动 · 双指缩放</p>
        <div class="toast" data-toast hidden></div>
      </div>
      <nav class="strip" data-strip aria-label="场景列表"></nav>
    </div>
  `;
}

function renderMessage(root, title, hint) {
  root.innerHTML = `
    <main class="message">
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(hint)}</p>
    </main>
  `;
}
