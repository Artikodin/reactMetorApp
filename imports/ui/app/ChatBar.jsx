import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
const Search = Input.Search;

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
    Meteor.call('sendMessage', message, () => {
      this.setState({ value: '' });
    })
  }

  render() {

    return (
      <Form
        onSubmit={this.handleSubmit}
       >
        <Input
          placeholder="write a message"
          onChange={this.handleChange}
          value={this.state.value}
        />
         <Button
          type="primary"
          htmlType="submit"
          disabled={!this.state.value}
         > Send
         </Button>
      </Form>
    )
  }
}
