/* Chapter registry for the single story page.
   Add future prophets here; the story page renders whichever slug is in ?p=. */
import { chapter as adam } from './adam.js';
import { chapter as yusuf } from './yusuf.js';
import { chapter as idris } from './idris.js';
import { chapter as nuh } from './nuh.js';
import { chapter as hud } from './hud.js';
import { chapter as salih } from './salih.js';
import { chapter as ibrahim } from './ibrahim.js';
import { chapter as lut } from './lut.js';
import { chapter as ismail } from './ismail.js';
import { chapter as ishaq } from './ishaq.js';
import { chapter as yaqub } from './yaqub.js';
import { chapter as ayyub } from './ayyub.js';
import { chapter as shuayb } from './shuayb.js';

export const chapters = {
  adam,
  yusuf,
  idris,
  nuh,
  hud,
  salih,
  ibrahim,
  lut,
  ismail,
  ishaq,
  yaqub,
  ayyub,
  shuayb,
};

export const chapterOrder = ['adam', 'idris', 'nuh', 'hud', 'salih', 'ibrahim', 'lut', 'ismail', 'ishaq', 'yaqub', 'yusuf', 'ayyub', 'shuayb'];
