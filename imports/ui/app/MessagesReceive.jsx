import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import { Card, List } from 'antd';
import '/imports/ui/stylesheets/app/messagesReceive.css';

export default class MessagesReceive extends Component {

  render(){


    return (
      <div className="messageContainerReceive">
          <Card
            title={this.props.autor}
            bordered={false}
            className="messagesReceive"
            extra={<span>{this.props.date}</span>}
          >
              {this.props.message}
          </Card>
      </div>
      )
  }
}
