import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import HeaderBar from '/imports/ui/app/HeaderBar';
import SideBar from '/imports/ui/app/SideBar';
import MessagesList from '/imports/ui/app/MessagesList';
import NoSelectReceive from '/imports/ui/app/NoSelectReceive';

import './stylesheets/app.css';


// App component - represents the whole app
export default class App extends Component {

  constructor(){
    super()
    this.state={
      userReceiveId:''
    }
  }
  
  handleOnTouch = (id) => {
    this.setState({userReceiveId : id})
  }

  componentDidMount(){
    if(this.props.match !== undefined){
      this.setState({userReceiveId : this.props.match.params._id})
    }
  }
  
  render() {
    let mainCopomponent = <NoSelectReceive/>
    if(this.state.userReceiveId.length !== 0){
      mainCopomponent = <MessagesList userReceiveId={this.state.userReceiveId}/>;
    }
    return (
      <div className="appContainer">
        <HeaderBar/>
        <div className="bodyContainer">
          <SideBar handleOnTouch={this.handleOnTouch}/>
          {mainCopomponent}
        </div>
      </div>
    );
  }
}
