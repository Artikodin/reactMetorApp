import React, { Component } from 'react';

import HeaderBar from '/imports/ui/app/HeaderBar';

// App component - represents the whole app
export default class NotFound extends Component {

  render() {
    return (
      <div className="appContainer">
        <HeaderBar/>
        404 cette page n'existe pas!!!!
      </div>
    );
  }
}
