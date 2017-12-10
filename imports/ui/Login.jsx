import React, { Component } from 'react';

import HeaderBar from '/imports/ui/app/HeaderBar';

// App component - represents the whole app
export default class Login extends Component {
    handleClick = () => {
        Session.set('Meteor.loginButtons.dropdownVisible' , true);
    }
    render() {
        return (
            <div className="appContainer">
                <HeaderBar/>
                <div style={{margin:'auto', textAlign:'center'}}>
                    Vous êtes acctuellement pas connecté au Super Chat. Veuillez vous connecter pour pouvoir commencer à tchatter!
                    <br/>
                    <button onClick={this.handleClick}>Sigin in</button>
                </div>
            </div>
        );
    }
}
