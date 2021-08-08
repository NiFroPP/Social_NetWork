import React from "react";
import { addPost, updateNewPostText } from "../../../redux/postsReducer";
import StoreContext from "../../../StoreContext";
import Posts from "./Posts";

const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState().postsPage;
        const posts = state.posts;

        const onAddPost = () => {
          store.dispatch(addPost());
        };

        const onPostChange = text => {
          store.dispatch(updateNewPostText(text));
        };

        return <Posts postsPage={state} posts={posts} addPost={onAddPost} updateNewPostText={onPostChange} />;
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
