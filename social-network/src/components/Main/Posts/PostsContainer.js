import { addPost, updateNewPostText } from "../../../redux/postsReducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    postsPage: state.postsPage,
    posts: state.postsPage.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPost());
    },
    updateNewPostText: text => {
      dispatch(updateNewPostText(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
