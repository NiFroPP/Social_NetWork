import React from "react";
import "./Posts.scss";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Posts = () => {
  return (
    <div className="posts">
      <div className="main__photo">
        <img src="./images/panorama_gorod.jpeg" alt="panorama" />
      </div>

      <h3>My Posts</h3>
      <PostForm />
      <div className="posts__content">
        <Post message="Hi" />
        <Post message="Hello" />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
