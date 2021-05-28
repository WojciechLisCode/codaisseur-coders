const initialState = {
  loading: true,
  posts: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return { ...state, loading: true };
    }
    case "feed/postsFetched": {
      const newPosts = action.payload;

      return { ...state, loading: false, posts: [...state.posts, ...newPosts] };
    }
    default: {
      return state;
    }
  }
}
