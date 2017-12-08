import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '/imports/api/messages';

import { Card } from 'antd';
import '/imports/ui/stylesheets/app/messagesSent.css';

export default class MessagesSent extends Component {

  render() {


    return (
      <div className="messageContainerSent">
        <Card
          title={this.props.autor}
          bordered={false}
          className="messagesSent"
          extra={<span>{this.props.date}</span>}
        >
          {this.props.message}
        </Card>
      </div>
    )
  }
}
