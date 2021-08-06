import React from "react";
import "./Post.scss";

const Post = props => {
  return (
    <div className="post">
      <div className="post__user">
        <img className="post__avatar" src="./images/avatar.png" alt="logo" />
        <span>{props.message}</span>
      </div>
      <div className="post__user-like">{`Likes: ${props.likesCount}`}</div>
    </div>
  );
};

export default Post;
