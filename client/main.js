import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '/imports/ui/App';
import NotFound from '/imports/ui/NotFound';
import Login from '/imports/ui/Login';

import 'antd/dist/antd.css';

const authenticate = () => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    return false;
  } else {
    return true;
  }
};

Meteor.startup(() => {
  render(
    <Router history={createBrowserHistory()}>
      <div>
        <Switch>
          <PrivateRoute name="chat" path="/chat/:_id" component={App} />
          <PrivateRoute path="/" component={App} />
          <Route name="login" path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>,
    document.getElementById('app'));
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticate() ?(
      <Component {...props}/>
    ):(
      <Redirect to={{
        pathname: '/login'
      }} />
    )
  )} />
)
