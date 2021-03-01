import React from 'react';

import './navigation.component.scss';

export default class NavigationComponent extends React.Component {
    render() {
        return (
            <nav>
                <h3 className="cursive">Raffaele Valenti</h3>
                <span className="unselectable uppercase">Navigation menu</span>
            </nav>
        );
    }
}