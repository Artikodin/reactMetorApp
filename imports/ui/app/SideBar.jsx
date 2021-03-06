import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';


import '/imports/ui/stylesheets/app/sideBar.css';

export class SideBar extends Component {

  constructor() {
    super()
    this.state = {
      currentEmail: '',
    }
  }

  componentDidMount() {
    if (Meteor.user() !== undefined) {
      this.setState({ currentEmail: 'Meteor.user().emails[0].address' })
    }
  }

  handleOnTouch = (id) => {
    console.log(id)
  }

  render() {
    let userList = null;
    if (this.props.users.length > 0) {
      userList = this.props.users.map((user) => {
        if (Meteor.userId() !== user._id) {
          let mail = user.emails[0].address;
          let name = mail.substring(0, mail.lastIndexOf("@"));
          return (
            // Conscient que la fonction de l'event est mal appelé mais comment peut on faire autrement dans ce cas là ?
            <li key={user._id} onClick={() => this.props.handleOnTouch(user._id)} >
              <Link to={`/chat/${user._id}`}>{name}</Link>
            </li>
          )
        }
      });
    }

    return (
      <ul className="userList">
        <li>Utilisateurs inscrit au super chat</li>
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
