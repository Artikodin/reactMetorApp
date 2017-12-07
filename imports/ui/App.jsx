import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Users from '/imports/api/users'
import Task from './Task';

// App component - represents the whole app
export class App extends Component {

  renderTasks() {
    return this.props.users.map((task) => (
      <Task key={task._id} user={task.name} />
    ));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    user = this.refs.user.value.trim();
    Users.insert({
      name: user
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <form action="#" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="user"
          />
        </form>
        <ul>
          {/* {this.renderTasks()} */}
        </ul>
      </div>
    );
  }
}

// export default withTracker(() => {
//   return {
//     users: Users.find({}).fetch(),
//   };
//   console.log(users)
// })(App);

// const FooWithAllTheThings = compose(
//   withTracker(() => {
//     return {
//       users: Users.find({}).fetch(),
//     };}
//   )
// )(App);