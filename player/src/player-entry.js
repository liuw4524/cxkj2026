import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import './style.css';
import { mountPlayer } from './player.js';

const root = document.querySelector('#app');

if (root) {
  const params = new URLSearchParams(window.location.search);
  mountPlayer(root, {
    shareCode: root.dataset.shareCode || params.get('code') || '',
    apiBase: root.dataset.apiBase || '/api',
  });
}
