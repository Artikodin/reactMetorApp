import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { List, Avatar } from 'antd';

import '/imports/ui/stylesheets/app/sideBar.css';

export class SideBar extends Component {

  render(){
    let userList = null;
    if(this.props.users.length > 0){
      userList = this.props.users.map((user) => {
        return (
        <li
        key={user._id}
        ><Link to={`/chat/${user._id}`}>{user.emails[0].address}</Link></li>
      )
      });
    }
    return (
      <ul>
      {userList}
      </ul>
      )
  }
}

export default withTracker(() => {
  Meteor.subscribe('userList');
  return {
    users: Meteor.users.find({}).fetch(),
  };
})(SideBar);
