import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { List, Avatar } from 'antd';

import '/imports/ui/stylesheets/app/sideBar.css';

export class SideBar extends Component {

  render(){

    return (
      <List
        itemLayout="horizontal"
        className="userList"
        dataSource={this.props.users}
        renderItem={user => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{user.emails[0].address}</a>}
        />
      </List.Item>
    )}
  />
      )
  }
}

export default withTracker(() => {
  Meteor.subscribe('userList');
  return {
    users: Meteor.users.find({}).fetch(),
  };
})(SideBar);