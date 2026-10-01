/* Chapter registry for the single story page.
   Add future prophets here; the story page renders whichever slug is in ?p=. */
import { chapter as adam } from './adam.js';
import { chapter as yusuf } from './yusuf.js';
import { chapter as idris } from './idris.js';
import { chapter as nuh } from './nuh.js';
import { chapter as hud } from './hud.js';
import { chapter as salih } from './salih.js';

export const chapters = {
  adam,
  yusuf,
  idris,
  nuh,
  hud,
  salih,
};

export const chapterOrder = ['adam', 'idris', 'nuh', 'hud', 'salih', 'yusuf'];
