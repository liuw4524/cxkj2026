import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { escapeHtml } from './navigation.js';

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

export function mountEditor(container, { imageUrl, hotspots, onPlace, onSelect }) {
  let current = [...(hotspots || [])];
  const viewer = new Viewer({
    container,
    panorama: imageUrl,
    navbar: ['zoom', 'move'],
    lang: LANG,
    loadingTxt: '正在加载全景…',
    mousewheel: true,
    mousemove: true,
    plugins: [
      MarkersPlugin.withConfig({
        clickEventOnMarker: false,
        markers: toMarkers(current),
      }),
    ],
  });
  const markers = viewer.getPlugin(MarkersPlugin);

  const paint = (list, draft) => {
    current = list;
    const next = toMarkers(list);
    if (draft) {
      next.push({
        id: 'draft',
        position: { yaw: draft.yaw, pitch: draft.pitch },
        anchor: 'bottom center',
        html: '<span class="hotspot is-draft"><span class="hotspot-dot"></span><span class="hotspot-label">新热点</span></span>',
      });
    }
    markers.setMarkers(next);
  };

  viewer.addEventListener('click', ({ data }) => {
    if (!data || data.rightclick) {
      return;
    }
    paint(current, data);
    onPlace?.({ yaw: data.yaw, pitch: data.pitch });
  });

  markers.addEventListener('select-marker', ({ marker, rightClick }) => {
    if (rightClick || marker.id === 'draft') {
      return;
    }
    onSelect?.(marker.id);
  });

  return {
    setMarkers(list) {
      paint(list || [], null);
    },
    destroy() {
      viewer.destroy();
    },
  };
}

function toMarkers(hotspots) {
  return hotspots.map((hotspot) => ({
    id: String(hotspot.id),
    position: { yaw: hotspot.yaw, pitch: hotspot.pitch },
    anchor: 'bottom center',
    tooltip: hotspot.title,
    html: `<span class="hotspot"><span class="hotspot-dot"></span><span class="hotspot-label">${escapeHtml(hotspot.title)}</span></span>`,
  }));
}
