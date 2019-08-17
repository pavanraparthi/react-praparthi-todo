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
      <span>{props.userName}</span>
      <span>{props.lastUpdated}</span>
      <input type="button" value="Log out" onClick={props.logoutEvent}/>
    </div>
  )
}

class Header extends Component {
  constructor (){
    
  }
  render() {
    return (
      <div>
        <h1>Welcome to Todo App</h1>
        { props.isLoggedIn ? <LoginTemplate userName={props.userName}
        lastUpdated={props.lastUpdated} logoutEvent={props.logoutEvent}/> : <NonLoginTemplate loginEvent={props.loginEvent} signUpEvent={props.signUpEvent}/>}
      </div>
    )
  }
}

export default Header;