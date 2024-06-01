import { StrictMode, lazy } from 'react';
import ReactDOM from 'react-dom/client';

const App = lazy(() => import('./App.tsx'));

import './index.less';

import './assets/fonts/Front Page News.otf';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
