import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/usersReducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
