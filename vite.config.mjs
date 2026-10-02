import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Multi-page app: home + one dynamic story page + one dynamic foundations page
// (each content-switches by ?p=).
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
        foundations: resolve(__dirname, 'src/templates/foundations/index.html'),
        asma: resolve(__dirname, 'src/templates/asma-ul-husna/index.html'),
        caliphAbubakr: resolve(__dirname, 'src/templates/caliphs/abu-bakr/index.html'),
        caliphUmar: resolve(__dirname, 'src/templates/caliphs/umar/index.html'),
        caliphUthman: resolve(__dirname, 'src/templates/caliphs/uthman/index.html'),
        caliphAli: resolve(__dirname, 'src/templates/caliphs/ali/index.html'),
      },
    },
  },
});
