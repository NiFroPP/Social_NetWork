import profileAPI from "../API/profileAPI";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const BASIC_USER_ID = 19051;

const initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 10 },
    { id: 2, message: "Hi, how are you?", likesCount: 2 },
    { id: 3, message: "Yo", likesCount: 3 },
  ],
  newPostText: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      // let newPost = {
      //   id: 5,
      //   message: state.newPostText,
      //   likesCount: 5,
      // };
      // stateCopy.posts.push(newPost);
      // stateCopy.newPostText = "";

      // let newPostText = state.newPostText;

      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
            likesCount: 5,
          },
        ],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      // stateCopy.newPostText = action.text;
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId = BASIC_USER_ID) => {
  return dispatch => {
    profileAPI
      .getAPIUserIDProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      })
      .catch(err => console.log(new Error(err.message)));
  };
};

export default postsReducer;
