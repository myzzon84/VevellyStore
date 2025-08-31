import './index.css';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(<App />);
