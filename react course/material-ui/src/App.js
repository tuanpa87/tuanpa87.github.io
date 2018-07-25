import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Exercises from "./components/Exercises/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises
  };

  getExercisesByGroup() {
    return Object.entries(this.state.exercises.reduce((categories, item) => {
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
    }, {} ));
  }

  render() {
    const exercises = this.getExercisesByGroup();
    console.log(exercises);
    console.log(exercises.length);
    return (
      <div className="App">
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </div>
    );
  }
}

export default App;
