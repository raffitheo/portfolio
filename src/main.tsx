import i18n from '@localizations';
import { StrictMode, lazy } from 'react';
import ReactDOM from 'react-dom/client';

const App = lazy(() => import('./app.tsx'));

import './index.sass';

i18n.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
