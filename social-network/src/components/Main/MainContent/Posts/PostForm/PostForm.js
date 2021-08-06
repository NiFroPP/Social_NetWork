import React from "react";
import "./PostForm.scss";

const PostForm = props => {
  const onAddPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  let newPostElement = React.createRef();

  return (
    <div className="posts__form">
      <textarea ref={newPostElement}></textarea>
      <button onClick={onAddPost}>Add post</button>
    </div>
  );
};

export default PostForm;
