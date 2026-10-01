// Reorganize Vite's dist/ into a directly servable static site for Cloudflare Pages.
//
// Vite emits the three HTML entries under dist/src/templates/ (mirroring the
// source template paths). This moves them to dist/index.html,
// dist/stories/index.html and dist/foundations/index.html, and fixes the
// relative asset paths, so `dist/` can be used as-is as the Pages build
// output directory.
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');

const home = path.join(dist, 'src/templates/index.html');
const story = path.join(dist, 'src/templates/stories/index.html');
const foundations = path.join(dist, 'src/templates/foundations/index.html');

// Home page: dist/src/templates/index.html -> dist/index.html
// Vite rewrote the entry script to ../../assets/... ; from dist/ root it is ./assets/...
// The public-dir refs (assets/css/..., assets/brand/...) were authored relative
// to the site root and are already correct — leave them untouched.
let html = await fs.readFile(home, 'utf8');
html = html.split('../../assets/').join('./assets/');
await fs.writeFile(path.join(dist, 'index.html'), html);

// Story page: dist/src/templates/stories/index.html -> dist/stories/index.html
// Vite rewrote the entry script to ../../../assets/... ; from dist/stories/ it is ../assets/...
// The public-dir refs (../assets/css/..., ../assets/brand/...) were authored
// relative to the stories/ dir and are already correct — leave them untouched.
html = await fs.readFile(story, 'utf8');
html = html.split('../../../assets/').join('../assets/');
await fs.mkdir(path.join(dist, 'stories'), { recursive: true });
await fs.writeFile(path.join(dist, 'stories/index.html'), html);

// Foundations page: dist/src/templates/foundations/index.html -> dist/foundations/index.html
// Same depth as the story page: ../../../assets/... becomes ../assets/...
html = await fs.readFile(foundations, 'utf8');
html = html.split('../../../assets/').join('../assets/');
await fs.mkdir(path.join(dist, 'foundations'), { recursive: true });
await fs.writeFile(path.join(dist, 'foundations/index.html'), html);

await fs.rm(path.join(dist, 'src'), { recursive: true, force: true });
console.log('dist/ finalized for Cloudflare Pages');
