import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/player/',
  build: {
    outDir: '../server/public/player',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(root, 'index.html'),
      output: {
        entryFileNames: 'assets/player.js',
        chunkFileNames: 'assets/chunk-[name].js',
        assetFileNames: (info) => (
          info.name && info.name.endsWith('.css')
            ? 'assets/player.css'
            : 'assets/[name][extname]'
        ),
      },
    },
  },
});
