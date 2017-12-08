import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import { Card, List } from 'antd';
import '/imports/ui/stylesheets/app/messagesSent.css';

export class MessagesSent extends Component {

  render(){


    return (
      <List
        className="messageContainerSent"
        dataSource={this.props.messages}
        renderItem={message => (
          <Card
            title={'test'}
            bordered={false}
            className="messagesSent"
            extra={<span>Date</span>}
          >
              <p>{message.message}</p>
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
})(MessagesSent);
