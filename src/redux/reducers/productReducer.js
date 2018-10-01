import * as TYPE from "../Const";

var defaultState = {
  isError: false,
  isLoading: false,
  posts: [[], [], [], []],
  pages : [1 , 1 , 1 , 1]
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    //FETCH_REQUEST
    case TYPE.FETCH_REQUEST:{
      return { ...state , isLoading: !state.isLoading };
    }
    //FETCH_SUCCESS
    case TYPE.FETCH_SUCCESS:{
      var products = state.posts[action.id].concat(action.data);
      var arrPost = [];
      var arrPageNumber = [];
      for (let index = 0; index < state.posts.length; index++) {
        if(index == action.id){ 
          arrPost[index] = products;
          arrPageNumber[index] = state.pages[index] + 1;
        } else {
          arrPost[index] = state.posts[index];
          arrPageNumber[index] = state.pages[index];
        }

      }
      return { ...state , posts: arrPost, pages : arrPageNumber };
    }
    //FETCH_ERROR
    case TYPE.FETCH_ERROR:{
      return { ...state, isError: !state.isError };
    }

    default:
      return state;
  }
  return state;
};

export default productReducer;
