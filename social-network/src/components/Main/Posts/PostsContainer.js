import { addPost, updateNewPostText, setUserProfile } from "../../../redux/postsReducer";
import Posts from "./Posts";
import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import profileAPI from "../../../API/profileAPI";

const BASIC_USER_ID = 2;

class PostsContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = BASIC_USER_ID;
    }

    profileAPI.getAPIUserIDProfile(userId).then(data => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <Posts
        // postsPage={this.props.postsPage}
        // posts={this.props.posts}
        // addPost={this.props.addPost}
        // updateNewPostText={this.props.updateNewPostText}
        // profile={this.props.profile}
        {...this.props}
      />
    );
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

export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(WithUrlDataContainerComponent);
