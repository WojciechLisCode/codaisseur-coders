import axios from "axios";

export const startLoading = (payload) => ({
  type: "feed/startLoading",
  payload: payload,
});

export const postsFetched = (payload) => ({
  type: "feed/postsFetched",
  payload: payload,
});

export async function fetchNext5Posts(dispatch, getState) {
  // console.log(getState().feed.posts);
  const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;
  const offset = getState().feed.posts.length;
  dispatch(startLoading());
  const res = await axios.get(`${API_URL}?offset=${offset}&limit=5`);
  const morePosts = res.data.rows;
  dispatch(postsFetched(morePosts));
  // console.log(getState().feed.posts.length);
  // console.log(offset);
}
