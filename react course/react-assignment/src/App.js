import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "some Username"
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="assignment-1">
          <h2>Assignment 1</h2>
          <UserInput
            changed={this.usernameChangedHandler}
            currentName={this.state.username}
          />
          <UserOutput userName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName="Max" />
        </div>


        <div className="assignment-2">




        </div>
      </div>
    );
  }
}

export default App;
