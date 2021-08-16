import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
  toggleFollowingProgress,
} from "../../../redux/usersReducer";
import usersAPI from "../../../API/usersAPI";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);

    usersAPI.getAPIUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.setIsFetching(false);
    });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);

    usersAPI.getAPIUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setIsFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     follow: userID => {
//       dispatch(followAC(userID));
//     },
//     unfollow: userID => {
//       dispatch(unfollowAC(userID));
//     },
//     setUsers: users => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: page => {
//       dispatch(setCurrentPageAC(page));
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleidFetching: idFetching => {
//       dispatch(setIsFetchingAC(idFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
