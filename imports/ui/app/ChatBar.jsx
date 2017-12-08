import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';

export default class ChatBar extends Component {

  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    message = this.state.value.trim();
    console.log(message);
    Meteor.call('sendMessage', message, () => {
      this.setState({ value: '' });
    })
  }

  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          placeholder="Write message"
          test="message"
          onChange={this.handleChange}
          value={this.state.value}
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
