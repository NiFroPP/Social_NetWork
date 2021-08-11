import React from "react";
import "./Users.scss";
import * as axios from "axios";
import anonymousAvatar from "../../../assets/images/anonymous-avatar.png";
import { BASE_SERVER_USERS } from "../../../API/api";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`${BASE_SERVER_USERS}?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
    }
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`${BASE_SERVER_USERS}?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className="users">
        <select className="users__pages" size="5">
          {pages.map(page => {
            return (
              <option
                className={this.props.currentPage === page ? "users__page-active" : "users__page"}
                onClick={event => {
                  this.onPageChanged(page);
                }}
                key={page}>
                {page}
              </option>
            );
          })}
        </select>
        {this.props.users.map(user => {
          return (
            <div className="users__user" key={user.id}>
              <div className="users__avatar">
                <img src={user.photos.small !== null ? user.photos.small : anonymousAvatar} alt={user.id} />
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}>
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                    className="unfollow">
                    Unfollow
                  </button>
                )}
              </div>
              <div className="users__info">
                <div className="users__id">
                  <strong>ID: </strong>
                  {user.id}
                </div>
                <div className="users__name">
                  <strong>Name: </strong>
                  {user.name}
                </div>

                <div className="users__status">
                  <strong>Status: </strong>
                  {user.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
