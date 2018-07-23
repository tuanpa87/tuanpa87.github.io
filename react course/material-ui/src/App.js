import React, { Component } from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer"
import Exercises from "./components/Exercises/Exercises";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Exercises/>
        <Footer/>
      </div>
    );
  }
}

export default App;
