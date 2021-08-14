import React from "react";
import "./PostForm.scss";

const PostForm = props => {
  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = event => {
    props.updateNewPostText(event.target.value);
  };

  return (
    <div className="posts__form">
      <textarea onChange={onPostChange} value={props.newPostText} placeholder="Enter your post..." />
      <button onClick={onAddPost}>Add post</button>
    </div>
  );
};

export default PostForm;
