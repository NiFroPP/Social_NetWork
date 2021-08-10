const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 10 },
    { id: 2, message: "Hi, how are you?", likesCount: 2 },
    { id: 3, message: "Yo", likesCount: 3 },
  ],
  newPostText: "",
};

const postsReducer = (state = initialState, action) => {
  // let stateCopy = {
  //   ...state,
  //   posts: [...state.posts],
  // };

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
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default postsReducer;
