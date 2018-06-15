import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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
    otherState: 'some other value',
    username: 'username'
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

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Max1') }
        >switch Name</button>
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

        <br/> <br/>
        <div className="exercise"> 
          <UserInput 
            change={this.usernameChangeHandler}
            currentName={this.state.username}
          />

          <UserOutput userName="Tuan" title="Lets go" detail="somewhere" />
          <UserOutput userName={this.state.username} title="Lets go" detail="somewhere 2 " />
          <UserOutput userName={this.state.username}  title="Lets go" detail="somewhere 3" />
        </div>


      </div>
    );
  }
}

export default App;
