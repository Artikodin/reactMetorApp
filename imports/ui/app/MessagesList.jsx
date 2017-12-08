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
<<<<<<< HEAD
      <div className="messageContainer">
        {messageList}
      </div>
    )
=======
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
>>>>>>> 877d6c6fb31275b9d2e6f58d011fc574bc4475d1
  }
}

export default withTracker(() => {
  Meteor.subscribe('allMessages');
  return {
    messages: Messages.find().fetch(),
  };
})(MessagesList);
