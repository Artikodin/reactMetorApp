import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';

export default class ChatBar extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    message = this.refs.message.value.trim();
    console.log(message);
    // Meteor.call('sendMessage', message, () => {
    //   this.refs.message.value = "";
    // })
  }

  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input 
        placeholder="Write message" 
        test="message"
        />
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
