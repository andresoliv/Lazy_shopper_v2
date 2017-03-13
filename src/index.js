import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/index.js';
import Login from './Login/login.js';
import Profile from './Profile/profile.js';

import {Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/Home" component={Home} />
    <Route path="/Profile" component={Profile} />
  </Router>
), document.getElementById('root'));
