import React from "react";
import { addPost, updateNewPostText } from "../../../redux/postsReducer";
import Posts from "./Posts";

const PostsContainer = props => {
  const state = props.store.getState().postsPage;
  const posts = state.posts;

  const onAddPost = () => {
    props.store.dispatch(addPost());
  };

  const onPostChange = text => {
    props.store.dispatch(updateNewPostText(text));
  };

  return <Posts postsPage={state} posts={posts} addPost={onAddPost} updateNewPostText={onPostChange} />;
};

export default PostsContainer;
