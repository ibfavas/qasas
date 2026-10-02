/* Asma ul Husna page entry. Content to be added later. */
import { createRoot } from 'react-dom/client';
import { AsmaPage } from '../pages/Asma.jsx';
import { useSiteEffects } from '../hooks/effects.js';

function AsmaApp() {
  useSiteEffects();
  return <AsmaPage />;
}

createRoot(document.getElementById('root')).render(<AsmaApp />);
