import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import { Card, Avatar, List } from 'antd';
import '/imports/ui/stylesheets/app/messageList.css';

export class MessagesList extends Component {

  render(){


    return (
      <List
        className="messageContainer"
        dataSource={this.props.messages}
        renderItem={message => (
      <Card
        title={'test'}
        bordered={false}
      >
          {message.message}
      </Card>
    )}
  />
      )
  }
}

export default withTracker(() => {
  Meteor.subscribe('allMessages');
  return {
    messages: Messages.find().fetch(),
  };
})(MessagesList);