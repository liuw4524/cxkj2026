import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/player/',
  build: {
    outDir: '../server/public/player/assets',
    emptyOutDir: false,
    minify: 'esbuild',
    lib: {
      entry: resolve(root, 'src/editor-entry.js'),
      formats: ['es'],
      fileName: () => 'editor.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'editor-[name][extname]',
      },
    },
  },
});
