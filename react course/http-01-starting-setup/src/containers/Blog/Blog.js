import React, { Component } from "react";
import axios from "axios";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
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
      .catch(error => this.setState({ error: true }));
  }

  selectedPostHandler = id => this.setState({ selectedPostId: id }); //console.log(reponse));

  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>Opps, something went wrong..</p>
    );
    if (!this.state.error)
      posts = this.state.posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostHandler(post.id)}
        />
      ));

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
       
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
