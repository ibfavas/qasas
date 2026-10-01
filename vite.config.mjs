import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Multi-page app: home + one dynamic story page (content switches by ?p=).
// `npm run build` emits a directly servable site into dist/ (finalized by
// scripts/finalize-dist.mjs), which Cloudflare Pages uses as its build output.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/templates/index.html'),
        story: resolve(__dirname, 'src/templates/stories/index.html'),
      },
    },
  },
});
