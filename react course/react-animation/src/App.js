import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))
          }
        >
          {" "}
          Toggle
        </button>
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div>
              <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "blue",
                  margin: "auto",
                  transition: "1s opacity ease-out",
                  opacity: state === "exiting" ? 0 : 1
                }}
              />
              <p> {state}</p>
            </div>
          )}
        </Transition>
        <br /> <br /> <br />
        <Transition
          in={this.state.modalIsOpen}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {state => <Modal show={state} closed={this.closeModal} />}
        </Transition>
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.openModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
