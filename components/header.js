import React, {  Component } from 'react';

const NonLoginTemplate = (props) => {
  return (
    <div>
      <input type="button" value="Log in" onClick="{this.props.loginEvent}"/>
      <input type="button" value="Sign Up" onClick="{this.props.signUpEvent}"/>
    </div>
  )
}

const LoginTemplate = (props) => {
  return (
    <div>
      <span>{this.props.userName}</span>
      <span>{this.props.lastUpdated}</span>
      <input type="button" value="Log out" onClick="{this.props.logoutEvent}"/>
    </div>
  )
}

class Header extends Component {
  constuctor (props){
    
  }
  render() {
    return (
      <div>
        <h1>Welcome to Todo App</h1>
        { this.props.isLoggedIn ? <LoginTemplate userName="{this.props.userName}"
        lastUpdated="{this.props.lastUpdated}" logoutEvent="{this.props.logoutEvent}"/> : <NonLoginTemplate loginEvent="{this.props.loginEvent}" signUpEvent="{this.props.signUpEvent}"/>}
      </div>
    )
  }
}