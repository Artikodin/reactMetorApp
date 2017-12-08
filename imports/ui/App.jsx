import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/messages';

import AccountManage  from '/imports/ui/components/AccountManage'
import Task from './Task';

// App component - represents the whole app
export class App extends Component {

  renderTasks() {
    if (this.props.users.length > 0)
      return this.props.users.map((user) => (
        <Task key={user._id} user={user.emails[0].address} />
      ));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    message = this.refs.message.value.trim();
    Meteor.call('sendMessage', message, () => {
      this.refs.message.value = "";
    })
  }

  render() {
    console.log(this.props.users)
    return (
      <div className="container">
        <header>
          <AccountManage />
        </header>
        <form action="#" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="message"
          />
        </form>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// export default withTracker(() => {
//   Meteor.subscribe('allMessages');
//   return {
//     messages: Messages.find({test:false}).fetch(),
//   };
// })(App);

export default withTracker(() => {
  Meteor.subscribe('userList');
  return {
    users: Meteor.users.find({}).fetch(),
  };
})(App);