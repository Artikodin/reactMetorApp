import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';
import MessagesSent from './MessagesSent';
import MessagesReceive from './MessagesReceive';
import ChatBar from './ChatBar';

import { Card, Avatar, List } from 'antd';
import '/imports/ui/stylesheets/app/messageList.css';

export class MessagesList extends Component {

  render(){


    return (
      <div className="rightContainer">
        <List
          className="messageContainer"
        >
          <MessagesSent/>
          <MessagesReceive/>
        </List>
        <ChatBar />
      </div>
      )
  }
}

export default withTracker(() => {
  Meteor.subscribe('allMessages');
  return {
    messages: Messages.find().fetch(),
  };
})(MessagesList);
