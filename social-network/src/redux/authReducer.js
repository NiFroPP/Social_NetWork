const SER_USER_DATA = "SER_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SER_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({ type: SER_USER_DATA, data: { userId, email, login } });

export default authReducer;
