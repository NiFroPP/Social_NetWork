import React from "react";
import "./PostForm.scss";

const PostForm = props => {
  const onAddPost = () => {
    props.dispatch({ type: "ADD_POST" });
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE_NEW_POST_TEXT", text: text });
  };

  let newPostElement = React.createRef();

  return (
    <div className="posts__form">
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      <button onClick={onAddPost}>Add post</button>
    </div>
  );
};

export default PostForm;
