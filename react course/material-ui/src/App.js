import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Exercises from "./components/Exercises/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByGroup() {
    return Object.entries(
      this.state.exercises.reduce((categories, item) => {
        //initcategories = {}
        //console.log(category)
        const { muscles } = item; //~const muscles = exercise.muscles
        //console.log(muscles)
        categories[muscles] = categories[muscles]
          ? [...categories[muscles], item]
          : [item];
        //add item to init categories
        //if have categories[leg] then add clone and add more, if dont have then create new one
        return categories; //return an object
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  }; //category: category;

  handleExerciesSelected = id => {
    this.setState(
      ({ exercise }) => ({ exercise: exercises.find(ex => ex.id === id) }) 
      //note here is exercise (dont have s)
      // {exercise} = prevState.exercise
      //set state base on exercises that match selected id
    );
  };

  render() {
    const exercises = this.getExercisesByGroup();
    console.log(exercises);
    console.log(exercises.length);

    const { category, exercise } = this.state;

    return (
      <div className="App">
        <Header />
        <Exercises
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciesSelected}
          exercise = {exercise}
        />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelected}
          category={category}
        />
      </div>
    );
  }
}

export default App;
