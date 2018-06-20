import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "asfa1", name: "Max", age: 28 },
        { id: "vasdf1", name: "Manu", age: 29 },
        { id: "asdf11", name: "Stephanie", age: 26 }
      ],
      otherState: "some other value",
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };

    console.log("[App.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside shouldComponentUpdate",
      nextProps,
      nextState
    );

    return (
      nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] inside componentDidUpdate");
  }

  // state = {
  //   persons: [
  //     { id: "asfa1", name: "Max", age: 28 },
  //     { id: "vasdf1", name: "Manu", age: 29 },
  //     { id: "asdf11", name: "Stephanie", age: 26 }
  //   ],
  //   otherState: "some other value",
  //   showPersons: false
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          //isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({ showPersons: true })}>
          {" "}
          Show Persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}{" "}
        </AuthContext.Provider>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
