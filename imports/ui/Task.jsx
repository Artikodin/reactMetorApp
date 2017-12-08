import React, { Component } from 'react';
import { List } from 'antd';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <List
        size="large"
      >{this.props.user}</List>
    );
  }
}
