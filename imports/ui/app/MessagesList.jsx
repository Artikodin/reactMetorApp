import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';
import MessagesSent from './MessagesSent';
import MessagesReceive from './MessagesReceive';
import ChatBar from './ChatBar';

import { Card, Avatar, List } from 'antd';
import '/imports/ui/stylesheets/app/messageList.css';

export class MessagesList extends Component {

  render() {


    let messageList = null;
    if (this.props.messages.length > 0) {
      messageList = this.props.messages.map((message) => {
        if (message.userSend === Meteor.userId()) {
          return (
            <MessagesReceive
              key={message._id}
              autor='test'
              message={message.message}
              date='date'
            />
          )
        } else {
          return (
            <MessagesSent
              key={message._id}
              autor='test'
              message={message.message}
              date='date'
            />
          )
        }
      });
    }


    return (
      <div className="rightContainer">
        <div className="messageContainer">
          {messageList}
        </div>
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
