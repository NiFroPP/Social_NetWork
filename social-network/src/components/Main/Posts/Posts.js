import React from "react";
import "./Posts.scss";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import Preloader from "../../Preloader/Preloader";

const Posts = props => {
  const postElements = props.posts.map(e => {
    return <Post message={e.message} likesCount={e.likesCount} key={e.id} />;
  });

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className="posts">
      {/* <div className="main__photo">
        <img src="./images/panorama_gorod.jpeg" alt="panorama" />
      </div> */}

      <img src={props.profile.photos.large} alt={props.profile.fullName} />
      <PostForm newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
      <div className="posts__content">{postElements} </div>
    </div>
  );
};

export default Posts;
