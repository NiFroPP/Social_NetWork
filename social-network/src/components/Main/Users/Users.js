import React from "react";
import "./Users.scss";
import anonymousAvatar from "../../../assets/images/anonymous-avatar.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = props => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
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
                  onClick={() => {
                    axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "88df7ccc-8a4e-436e-853c-c5519e0fc4ed",
                        },
                      })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                      });
                  }}>
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "88df7ccc-8a4e-436e-853c-c5519e0fc4ed",
                          },
                        }
                      )
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });
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
};

export default Users;
