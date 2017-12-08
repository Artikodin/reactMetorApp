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
            <MessagesSent
              key={message._id}
              autor={message.userSendName}
              message={message.message}
              date={'message.sendAt'}
            />
          )
        } else {
          return (
            <MessagesReceive
              key={message._id}
              autor={message.userSendName}
              message={message.message}
              date={'message.sendAt'}
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
        <ChatBar userReceiveId={this.props.userReceiveId}/>
      </div>
    )
  }
}

// attention mauvaise pratique !!!  Trie des données coté client au lieu de coté server ducoup trop de data envoyé!!!!!
export default withTracker((props) => {
  Meteor.subscribe('allMessages');
  console.log('receiver id ',props.userReceiveId);
  console.log('curent id ',Meteor.userId());
  return {
    messages: Messages.find({$or: [{userReceiveId: props.userReceiveId, userSendId:Meteor.userId()},{userSendId: props.userReceiveId, userReceiveId:Meteor.userId()}]}).fetch()
  };
})(MessagesList);
