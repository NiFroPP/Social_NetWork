import React from "react";
import "./Posts.scss";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Posts = () => {
  return (
    <div className="posts">
      <h3>My Posts</h3>
      <PostForm />
      <div className="posts__content">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
