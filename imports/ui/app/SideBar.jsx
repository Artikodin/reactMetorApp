import React, { Component } from 'react';
import { List, Avatar } from 'antd';

import '/imports/ui/stylesheets/app/sideBar.css';

export default class SideBar extends Component {

  render(){

    const data = [
      {
        title: 'User 1',
      },
      {
        title: 'User 2',
      },
      {
        title: 'User 3',
      },
      {
        title: 'User 4',
      },
    ];

    return (
      <List
        itemLayout="horizontal"
        className="userList"
        dataSource={data}
        renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
        />
      </List.Item>
    )}
  />
      )
  }
}
