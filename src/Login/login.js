import React, { Component, PropTypes } from 'react';
import {Router, Route, browserHistory } from 'react-router';

const proceed = (event) => {
  console.log(event);
  event.preventDefault();
  browserHistory.push('/Home');
}

const Login = (props) => {
  return (
    <div>
      <h1 className="text-center">Welcome, Lazy $hopper!</h1>
      <form className="form-group form-horizontal" onSubmit={proceed}>
        <input className="center-block" type='text' placeholder="username" required></input>
        <input className="center-block" type='text' placeholder="password" required></input>
        <button className="center-block" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;