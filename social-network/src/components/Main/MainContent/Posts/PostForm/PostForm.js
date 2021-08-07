import React from "react";
import "./PostForm.scss";
import { addPost, updateNewPostText } from "../../../../../redux/state";

const PostForm = props => {
  const onAddPost = () => {
    props.dispatch(addPost());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostText(text));
  };

  let newPostElement = React.createRef();

  return (
    <div className="posts__form">
      <textarea onChange={onPostChange} ref={newPostElement} value={props.postsPage.newPostText} />
      <button onClick={onAddPost}>Add post</button>
    </div>
  );
};

export default PostForm;
