/* SSR verification for the single-story-page restructure. Loaded via vite ssrLoadModule. */
import { renderToStaticMarkup } from 'react-dom/server';
import { HomePage } from '../src/pages/Home.jsx';
import { ChapterPage } from '../src/pages/Chapter.jsx';
import { chapters } from '../src/data/chapters.js';

const home = renderToStaticMarkup(<HomePage />);
const adam = renderToStaticMarkup(<ChapterPage chapter={chapters.adam} />);
const yusuf = renderToStaticMarkup(<ChapterPage chapter={chapters.yusuf} />);

const checks = [
  ['no illustration button (adam)', !adam.includes('About this illustration')],
  ['no illustration button (yusuf)', !yusuf.includes('About this illustration')],
  ['no illustration button (home)', !home.includes('About this illustration')],
  ['no cap-toggle class anywhere', !adam.includes('cap-toggle') && !yusuf.includes('cap-toggle')],
  ['static vignette captions (adam)', adam.includes('vignette-cap') && adam.includes('The angels bowed')],
  ['static vignette captions (yusuf)', yusuf.includes('vignette-cap') && yusuf.includes('Eleven stars')],
  ['adam next links to ?p=yusuf', adam.includes('href="?p=yusuf"')],
  ['yusuf prev links to ?p=adam', yusuf.includes('href="?p=adam"')],
  ['adam chapter content intact', adam.includes('Chapter I') && adam.includes('The Two Sons') && adam.includes('bukhari:3326')],
  ['yusuf chapter content intact', yusuf.includes('Chapter XI') && yusuf.includes('The Dream Fulfilled')],
  ['home links to single story page', home.includes('stories/?p=adam') && home.includes('stories/?p=yusuf')],
  ['home uses new hero jpg', home.includes('hero-night-dunes.jpg')],
  ['no stale adam.html/yusuf.html refs on home', !home.includes('adam.html') && !home.includes('yusuf.html')],
  ['registry has both chapters', Object.keys(chapters).join(',') === 'adam,yusuf'],
];

export const results = checks.map(([name, ok]) => ({ name, ok }));
export const failed = checks.filter(([, ok]) => !ok).map(([name]) => name);
