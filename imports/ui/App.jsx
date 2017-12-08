import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

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
    this.setState({userReceiveId : this.props.match.params._id})
  }

  render() {
    return (
      <div className="container">
        <header>
        </header>
        <SideBar/>
        <MessagesList userReceiveId={this.state.userReceiveId}/>
      </div>
    );
  }
}
