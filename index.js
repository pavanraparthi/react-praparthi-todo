import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/header';
import Todos from './components/todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn:false,
      todos: [{
        name:"React",
        desc:"Learn React Framework",
        priority:"High"
      },
      {
        name:"Angular",
        desc:"Learn Angular Framework",
        priority:"High"
      }],
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
        {this.state.isLoggedIn ? 
        <Todos todos={this.state.todos}></Todos> : ''}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
