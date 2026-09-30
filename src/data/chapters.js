/* Chapter registry for the single story page.
   Add future prophets here; the story page renders whichever slug is in ?p=. */
import { chapter as adam } from './adam.js';
import { chapter as yusuf } from './yusuf.js';

export const chapters = {
  adam,
  yusuf,
};

export const chapterOrder = ['adam', 'yusuf'];
