import React, { Component } from 'react';

import AccountManage  from '/imports/ui/app/AccountManage'

// App component - represents the whole app
export default class Login extends Component {

    render() {
        return (
            <div className="container">
                <AccountManage />
            </div>
        );
    }
}
