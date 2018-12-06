//Function Component
import React, { Component } from "react"; //ES6
import Users from './Users';
// pass to the class component
function User(props) {
  return (<Users details={props.userList}/>);
}

export default User;
