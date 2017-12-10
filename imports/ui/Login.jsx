import React, { Component } from 'react';

import HeaderBar from '/imports/ui/app/HeaderBar';

// App component - represents the whole app
export default class Login extends Component {

    render() {
        return (
            <div className="appContainer">
                <HeaderBar/>
            </div>
        );
    }
}
