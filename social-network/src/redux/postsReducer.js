const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const postsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 5,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.text;
      break;
    }
    default:
      break;
  }

  return state;
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default postsReducer;
