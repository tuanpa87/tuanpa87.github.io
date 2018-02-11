import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize: 15
    }
    this.onSetColor = this.onSetColor.bind(this)
  }

  onSetColor(params) {
    //console.log(params)
    this.setState( {
      color: params
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Review app: Change font setting</h1>
        </header>

        <div className="container mt-50">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <SizeSetting />
          <Reset />
          <Result color ={this.state.color} />
        </div>
      </div>
    );
  }
}

export default App;
