import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';

export default class ChatBar extends Component {

  handleSubmit = (e) => {
  e.preventDefault();
  console.log('hey');
}


  render(){

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input placeholder="Write message" />
        <Button
          type="primary"
          htmlType="submit"
          >
          Send
        </Button>
      </Form>
    )
  }
}
