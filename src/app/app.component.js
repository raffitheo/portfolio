import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MaintenancePage from './pages/maintenance/maintenance.page';
import NavigationComponent from './components/navigation/navigation.component';

import './app.component.scss';

export default class AppComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <NavigationComponent />
                <Switch>
                    <Route component={ MaintenancePage } />
                </Switch>
            </BrowserRouter>
        );
    }
}