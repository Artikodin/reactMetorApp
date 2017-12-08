import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';

import AccountManage  from '/imports/ui/app/AccountManage'

import '/imports/ui/stylesheets/app/sideBar.css';

export class SideBar extends Component {

  constructor(){
    super()
    this.state = {
      currentEmail:'',
    }
  }

  componentDidMount(){
    if(Meteor.user() !== undefined){
      this.setState({currentEmail :'Meteor.user().emails[0].address'})
      // this.setState({currentEmail :Meteor.user().emails[0].address})
    }
  }

  render() {
    let userList = null;
    if (this.props.users.length > 0) {
      userList = this.props.users.map((user) => {
        if (Meteor.userId() !== user._id) {
          return (
            <li
              key={user._id}
            ><Link to={`/chat/${user._id}`}>{user.emails[0].address}</Link></li>
          )
        }
      });
    }

    return (
      <ul className="userList">
        <AccountManage />
        <li>Vous êtes connectez avec : {this.state.currentEmail}</li>
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
