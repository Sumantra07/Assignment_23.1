// Class Component
import React, { Component } from "react"; //ES6

class Users extends Component {
  render() {
    return(<ol>
        {this.props.details.map(user => (
          <li>
             {user.name} is {user.Age} years old!
          </li>
        ))}
      </ol>)
  }
}

export default Users;
