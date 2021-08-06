import React from "react";
import "./Posts.scss";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Posts = props => {
  const postElements = props.postsPage.posts.map(e => {
    return <Post message={e.message} likesCount={e.likesCount} key={e.id} />;
  });

  return (
    <div className="posts">
      <div className="main__photo">
        <img src="./images/panorama_gorod.jpeg" alt="panorama" />
      </div>

      <h3>My Posts</h3>
      <PostForm />
      <div className="posts__content">{postElements} </div>
    </div>
  );
};

export default Posts;
