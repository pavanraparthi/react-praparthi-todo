import React, {  Component } from 'react';

const NonLoginTemplate = (props) => {
  return (
    <div>
      <input type="button" value="Log in" onClick={props.loginEvent}/>
      <input type="button" value="Sign Up" onClick={props.signUpEvent}/>
    </div>
  )
}

const LoginTemplate = (props) => {
  return (
    <div>
      <div>
        <span>{props.userName}</span>
        <input type="button" value="Log out" onClick={props.logoutEvent}/>
      </div>
      <span>{props.lastUpdated}</span>
    </div>
  )
}

class Header extends Component {
  
  render() {
    return (
      <div>
        <h1>Welcome to Todo App</h1>
        { this.props.isLoggedIn ? <LoginTemplate userName={this.props.userName}
        lastUpdated={this.props.lastUpdated} logoutEvent={this.props.logoutEvent}/> : <NonLoginTemplate loginEvent={this.props.loginEvent} signUpEvent={this.props.signUpEvent}/>}
      </div>
    )
  }
}

export default Header;