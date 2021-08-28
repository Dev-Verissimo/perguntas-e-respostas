import React, { Component } from "react";

export default class Tentativa extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://opentdb.com/api.php?amount=2");

    const [posts] = await Promise.all([postsResponse]);
    console.log(posts.body)
    const postJson = await posts.json();

    this.setState({ posts: postJson });
  };

  render() {
    const { posts } = this.state;
    // for (let i = 1; i < 6; i++) {
    //     console.log(posts.results[i])
    // }

    return (
      <div>
        <div>
          {Array.from(posts).map(post => (
            <div key={post.results[0].question}>
              <h1>{post.results[0].question}</h1>
              <p>oi</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
