import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Multi-page app: three entries keep the exact current URLs.
// Build goes to dist/, then `npm run deploy` syncs the built files to the
// repo root, because GitHub Pages serves this repo from the branch root.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/templates/index.html'),
        adam: resolve(__dirname, 'src/templates/stories/adam.html'),
        yusuf: resolve(__dirname, 'src/templates/stories/yusuf.html'),
      },
    },
  },
});
