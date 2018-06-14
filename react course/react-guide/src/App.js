import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'MAx', age: 28
      },
      {
        name: 'Mike', age: 21
      },
      {
        name: 'Steve', age: 55
      },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    this.setState({
      persons: [
        {
          name: newName, age: 28
        },
        {
          name: 'Mikeken', age: 22
        },
        {
          name: 'Steve', age: 55
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Max', age: 28
        },
        {
          name: event.target.value , age: 22
        },
        {
          name: 'Steve', age: 55
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <button onClick={() => this.switchNameHandler('Max1') }>switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}

        />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max2222')}
        change={this.nameChangeHandler}
        >
          My Hobbies: Racing 
        </Person>
        <Person name="Steve" age="50"/>
      </div>
    );
  }
}

export default App;
