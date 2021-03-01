import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './app/app.component';

import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <AppComponent />
    </React.StrictMode>, document.getElementById('root')
);

reportWebVitals();