import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// App component - represents the whole app
export default class AccountManage extends Component {

    componentDidMount() {
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        return <span ref="container" />
    }
}

// export default withTracker(() => {
//   Meteor.subscribe('allUsers');
//   return {
//     users: Users.find({test:false}).fetch(),
//   };
// })(App);