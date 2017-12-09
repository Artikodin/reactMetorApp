import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AccountManage from '/imports/ui/app/AccountManage'

import '/imports/ui/stylesheets/app/headerBar.css';


// App component - represents the whole app
export default class HeaderBar extends Component {

    render() {
        return (
            <header className="header-bar">
                <span>
                    Super Chat application meteor react
                </span>
                <span>
                    <AccountManage />
                </span>
            </header>
        )
    }
}