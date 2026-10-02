/* Four Caliphs page entry. One shared entry; the slug comes from the URL path. */
import { createRoot } from 'react-dom/client';
import { CaliphPage } from '../pages/Caliph.jsx';
import { useSiteEffects } from '../hooks/effects.js';

function CaliphApp() {
  useSiteEffects();
  return <CaliphPage />;
}

createRoot(document.getElementById('root')).render(<CaliphApp />);
