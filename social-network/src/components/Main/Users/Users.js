import React from "react";
import "./Users.scss";

const Users = props => {
  const users = [
    { id: 1, photoURL: "./images/avatar.png", followed: true, fullName: "Nick", status: "dad" },
    { id: 2, photoURL: "./images/avatar.png", followed: false, fullName: "Olga", status: "mom" },
    { id: 3, photoURL: "./images/avatar.png", followed: false, fullName: "Polina", status: "daughter" },
    { id: 4, photoURL: "./images/avatar.png", followed: true, fullName: "Artem", status: "son" },
  ];

  if (props.users.length === 0) {
    props.setUsers(users);
  }

  let usersElements = props.users.map(user => {
    return (
      <div className="users__user" key={user.id}>
        <div className="users__avatar">
          <img src={user.photoURL} alt={user.fullName} />
          {user.followed ? (
            <button
              onClick={() => {
                props.unfollow(user.id);
              }}
              className="unfollow">
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(user.id);
              }}>
              Follow
            </button>
          )}
        </div>
        <div className="users__info">
          <div className="users__name">
            <strong>Name: </strong>
            {user.fullName}
          </div>
          <div className="users__status">
            <strong>Status: </strong>
            {user.status}
          </div>
        </div>
      </div>
    );
  });
  return <div className="users">{usersElements}</div>;
};

export default Users;
