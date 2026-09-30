import { renderToStaticMarkup } from 'react-dom/server';
import { HomePage } from '../src/pages/Home.jsx';
import { ChapterPage } from '../src/pages/Chapter.jsx';
import { chapter as adam } from '../src/data/adam.js';
import { chapter as yusuf } from '../src/data/yusuf.js';

const out = {
  home: renderToStaticMarkup(<HomePage />),
  adam: renderToStaticMarkup(<ChapterPage chapter={adam} />),
  yusuf: renderToStaticMarkup(<ChapterPage chapter={yusuf} />),
};
process.stdout.write(JSON.stringify(out));
