import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  deletePostHandler = () => {
    axios
      .delete("/posts/" + this.props.match.params.postId)
      .then(response => console.log(response));
  };

  loadData() {
    if (this.props.match.params.postId)
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.postId)
      )
        axios
          .get("/posts/" + this.props.match.params.postId)
          .then(response => this.setState({ loadedPost: response.data }));
  }

  render() {
    //console.log(this.state.loadedPost);
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.postId)
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    if (this.state.loadedPost)
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    return post;
  }
}

export default FullPost;
