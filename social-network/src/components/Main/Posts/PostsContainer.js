import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addPost, updateNewPostText, getProfile } from "../../../redux/postsReducer";
import Posts from "./Posts";

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {
    return <Posts {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    newPostText: state.postsPage.newPostText,
    posts: state.postsPage.posts,
    profile: state.postsPage.profile,
  };
};

let WithUrlDataContainerComponent = withRouter(PostsContainer);

export default connect(mapStateToProps, { addPost, updateNewPostText, getProfile })(WithUrlDataContainerComponent);
