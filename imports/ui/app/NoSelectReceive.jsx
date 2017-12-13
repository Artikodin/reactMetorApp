import React, { Component } from 'react';

import '/imports/ui/stylesheets/app/noSelectReceive.css';

export default class NoSelectReceive extends Component {
  render(){
    return (
      <div className="no-select-receive">
          <span>Pour commencer à tchater veuillez selectionner un utilisateur dans la liste de gauche.</span>
      </div>
      )
  }
}
