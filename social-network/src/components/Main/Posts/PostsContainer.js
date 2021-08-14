import { addPost, updateNewPostText, setUserProfile } from "../../../redux/postsReducer";
import Posts from "./Posts";
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import { withRouter } from "react-router-dom";

class PostsContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then(response => {
      this.props.setUserProfile(response.data);
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

export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(PostsContainer);
