const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    // { id: 1, photoURL: "./images/avatar.png", followed: true, fullName: "Nick", status: "dad" },
    // { id: 2, photoURL: "./images/avatar.png", followed: false, fullName: "Olga", status: "mom" },
    // { id: 3, photoURL: "./images/avatar.png", followed: false, fullName: "Polina", status: "daughter" },
    // { id: 4, photoURL: "./images/avatar.png", followed: true, fullName: "Artem", status: "son" },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    default:
      return state;
  }
};

export const followAC = userID => ({ type: FOLLOW, userID });
export const unfollowAC = userID => ({ type: UNFOLLOW, userID });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
