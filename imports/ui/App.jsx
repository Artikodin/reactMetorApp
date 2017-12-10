import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import HeaderBar from '/imports/ui/app/HeaderBar';
import ChatBar from '/imports/ui/app/ChatBar';
import SideBar from '/imports/ui/app/SideBar';
import MessagesList from '/imports/ui/app/MessagesList';

import './stylesheets/app.css';


// App component - represents the whole app
export default class App extends Component {

  constructor(){
    super()
    this.state={
      userReceiveId:''
    }
  }

  componentDidMount(){
    if(this.props.match !== undefined){
      this.setState({userReceiveId : this.props.match.params._id})
    }
  }

  render() {
    return (
      <div className="appContainer">
        <HeaderBar/>
        <div className="bodyContainer">
          <SideBar/>
          <MessagesList userReceiveId={this.state.userReceiveId}/>
        </div>
      </div>
    );
  }
}
