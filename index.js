import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      userName:"",
      lastUpdated:new Date().toDateString()
    };
  }

  doLogout = () => {
    console.log("do Logout");
  }

  doLogin = () => {
    console.log("do Login");
  }

  doSignUp = () => {
    console.log("do Signup");
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn}
        userName={this.state.userName}
        lastUpdated={this.state.lastUpdated}
        logoutEvent={this.doLogout}
        loginEvent={this.doLogin}
        signUpEvent={this.doSignUp}></Header>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
