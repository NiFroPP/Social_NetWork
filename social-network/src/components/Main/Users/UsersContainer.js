import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from "../../../redux/usersReducer";
import * as axios from "axios";
import { getAPIUsers } from "../../../API/api";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleidFetching(true);

    const APIusers = getAPIUsers(this.props.currentPage, this.props.pageSize);

    if (this.props.users.length === 0) {
      axios.get(APIusers).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleidFetching(false);
      });
    }
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleidFetching(true);

    const APIusers = getAPIUsers(this.props.currentPage, this.props.pageSize);

    axios.get(APIusers).then(response => {
      this.props.setUsers(response.data.items);
      this.props.toggleidFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.idFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
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
    idFetching: state.usersPage.idFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userID => {
      dispatch(followAC(userID));
    },
    unfollow: userID => {
      dispatch(unfollowAC(userID));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: page => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleidFetching: idFetching => {
      dispatch(setIsFetchingAC(idFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
