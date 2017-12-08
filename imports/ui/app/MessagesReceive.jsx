import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import { Card, List } from 'antd';
import '/imports/ui/stylesheets/app/messagesReceive.css';

export class MessagesReceive extends Component {

  render(){


    return (
      <List
        className="messageContainerReceive"
        dataSource={this.props.messages}
        renderItem={message => (
          <Card
            title={'test'}
            bordered={false}
            className="messagesReceive"
            extra={<span>Date</span>}
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
})(MessagesReceive);
