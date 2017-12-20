import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Tracker } from 'meteor/tracker'

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

const history = createBrowserHistory();

Meteor.startup(() => {
  render(
    <Router history={history}>
      <div>
        <Switch>
          <PrivateRoute name="chat" path="/chat/:_id" component={App} />
          <ConnectedRoute name="login" path="/login" component={Login} />
          <PrivateRoute path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>,
    document.getElementById('app'));
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticate() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login'
        }} />
      )
  )} />
)

const ConnectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !authenticate() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/'
        }} />
      )
  )} />
)

Tracker.autorun(function () {
  if (authenticate()) {
    console.log('connecter')
    history.push('/', { some: 'state' })
  } else {
    console.log('non connecter')
    history.push('/login', { some: 'state' })
  }
});