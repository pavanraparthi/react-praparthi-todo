import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn:false,
      todos: [],
      userName:"",
      lastUpdated:new Date().toDateString()
    };
  }

  doLogout = () => {
    this.setState({
      isLoggedIn:false
    })
  }

  doLogin = () => {
    this.setState({
      isLoggedIn:true,
      userName:"pavan"
    })
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
