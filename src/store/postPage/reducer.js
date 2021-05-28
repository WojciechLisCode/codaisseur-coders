const initialState = {
  loading: true,
  post: null,
  comments: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/startLoading": {
      return initialState;
    }
    case "post/postsFetched": {
      const { post, comments } = action.payload;
      return { loading: false, post: post, comments: comments };
    }
    default: {
      return state;
    }
  }
}
