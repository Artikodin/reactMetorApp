import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import AccountManage  from '/imports/ui/app/AccountManage'
import ChatBar from '/imports/ui/app/ChatBar';
import SideBar from '/imports/ui/app/SideBar';
import MessagesList from '/imports/ui/app/MessagesList';

import Task from './Task';

import './stylesheets/app.css';


// App component - represents the whole app
export default class App extends Component {

  // renderTasks() {
  //   if (this.props.users.length > 0)
  //     return this.props.users.map((user) => (
  //       <Task key={user._id} user={user.emails[0].address} />
  //     ));
  // }

  render() {
    return (
      <div className="container">
        <header>
          <AccountManage />
        </header>
        {/* <form action="#" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="message"
          />
        </form>
        <ul>
          {this.renderTasks()}
        </ul> */}
        <SideBar />
        <MessagesList />
        <ChatBar />
      </div>
    );
  }
}



