import React, { Component } from 'react';


import User from './User';

class App extends Component {
  render() {
    // create the userList
    let userList = [
      { name: "Suresh", Age: '20' },
      { name: "Ramesh", Age: '22' },
      { name: "Naresh", Age: '24' },
      { name: "Madesh", Age: '30' }
    ];
    return (
      // passing userList to functional component      
      <div className="App">
        <User userList = {userList}/>
      </div>
    );
  }
}

export default App;
