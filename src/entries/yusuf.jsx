import { createRoot } from 'react-dom/client';
import { ChapterPage } from '../pages/Chapter.jsx';
import { chapter } from '../data/yusuf.js';

createRoot(document.getElementById('root')).render(<ChapterPage chapter={chapter} />);
