import React from "react";
import "./Posts.scss";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import Preloader from "../../Preloader/Preloader";
import PostProfile from "./PostProfile/PostProfile";

const Posts = props => {
  const postElements = props.posts.map(e => {
    return <Post message={e.message} likesCount={e.likesCount} key={e.id} />;
  });

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className="posts">
      <PostProfile profile={props.profile} />
      <PostForm newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
      <div className="posts__content">{postElements} </div>
    </div>
  );
};

export default Posts;
