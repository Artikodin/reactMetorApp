import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Switch } from 'react-router';
import App from '/imports/ui/App';
import NotFound from '/imports/ui/NotFound';
import Login from '/imports/ui/Login';
import createBrowserHistory from 'history/createBrowserHistory';

import 'antd/dist/antd.css';

// Meteor.startup(() => {
//   render(<Route />, document.getElementById('app'));
// });

const authenticate = (nextState, replace) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname },
        });
    }
};

Meteor.startup(() => {
    render(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route name="chat" path="/chat/:_id" component={App} onEnter={authenticate} />
                <Route name="login" path="/login" component={ Login } />
                <Route exact={true} path="*" component={ NotFound } />
            </Switch>
        </Router>,
        document.getElementById('app'));
});
