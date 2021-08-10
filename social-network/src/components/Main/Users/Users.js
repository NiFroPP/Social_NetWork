import React from "react";
import "./Users.scss";
import * as axios from "axios";
import anonymousAvatar from "../../../assets/images/anonymous-avatar.png";
import { BASE_SERVER_USERS } from "../../../API/api";

const Users = props => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get(BASE_SERVER_USERS).then(response => {
        props.setUsers(response.data.items);
      });
    }
  };

  return (
    <div className="users">
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(user => {
        return (
          <div className="users__user" key={user.id}>
            <div className="users__avatar">
              <img src={user.photos.small !== null ? user.photos.small : anonymousAvatar} alt={user.id} />
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}>
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
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
