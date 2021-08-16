import React from "react";
import "./Users.scss";
import anonymousAvatar from "../../../assets/images/anonymous-avatar.png";
import { NavLink } from "react-router-dom";
import followAPI from "../../../API/followAPI";

const Users = props => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const deleteFollow = user => {
    props.toggleFollowingProgress(true, user.id);
    followAPI
      .deleteAPIUserIdFollow(user.id)
      .then(data => {
        if (data.resultCode === 0) {
          props.unfollow(user.id);
        }
        props.toggleFollowingProgress(false, user.id);
      })
      .catch(err => console.log(new Error(err.message)));
  };

  const postFollow = user => {
    props.toggleFollowingProgress(true, user.id);
    followAPI
      .postAPIUserIdFollow(user.id)
      .then(data => {
        if (data.resultCode === 0) {
          props.follow(user.id);
        }
        props.toggleFollowingProgress(false, user.id);
      })
      .catch(err => console.log(new Error(err.message)));
  };

  return (
    <div className="users">
      <select className="users__pages" size="5">
        {pages.map(page => {
          return (
            <option
              className={props.currentPage === page ? "users__page-active" : "users__page"}
              onClick={event => {
                props.onPageChanged(page);
              }}
              key={page}>
              {page}
            </option>
          );
        })}
      </select>
      {props.users.map(user => {
        return (
          <div className="users__user" key={user.id}>
            <div className="users__avatar">
              <NavLink to={`/posts/${user.id}`}>
                <img src={user.photos.small !== null ? user.photos.small : anonymousAvatar} alt={user.id} />
              </NavLink>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => deleteFollow(user)}>
                  Follow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => postFollow(user)}
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
};

export default Users;
