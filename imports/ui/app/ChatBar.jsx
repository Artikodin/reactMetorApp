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

  handleSubmit = () => {
    message = this.state.value.trim();
    Meteor.call('sendMessage', message, () => {
      this.setState({ value: '' });
    })
  }

  render() {

    return (
      <Form>
        <Search
          placeholder="write a message"
          onChange={this.handleChange}
          onSearch={this.handleSubmit}
          enterButton="send"
          value={this.state.value}
        />
      </Form>
    )
  }
}
