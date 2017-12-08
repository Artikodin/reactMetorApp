import React, { Component } from 'react';
import { Card, Avatar, List } from 'antd';

export default class Messages extends Component {

  render(){

    const data = [
      {
        userName: 'User 1',
        content: 'hey !'
      },
      {
        userName: 'User 2',
        content: 'hello :)'
      }
    ];

    return (
      <List
        className="messageContainer"
        dataSource={data}
        renderItem={message => (
      <Card
        title={message.userName}
        bordered={false}
      >
          {message.content}
      </Card>
    )}
  />
      )
  }
}
