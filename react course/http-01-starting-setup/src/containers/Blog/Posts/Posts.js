import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Post from "../../../components//Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    //console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => ({
          ...post,
          author: "Max"
        }));
        this.setState({ posts: updatedPosts }); //console.log(reponse));
      })
      .catch(error => console.log(error));
  }

  selectedPostHandler = id => this.setState({ selectedPostId: id }); //console.log(reponse));

  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>Opps, something went wrong..</p>
    );
    if (!this.state.error)
      posts = this.state.posts.map(post => (
        <Link key={post.id} to={"" + post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.selectedPostHandler(post.id)}
          />
        </Link>
      ));

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
