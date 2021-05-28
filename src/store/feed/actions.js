import axios from "axios";
import { API_URL } from "../../config";

export const startLoading = () => ({
  type: "feed/startLoading",
});

export const postsFetched = (payload) => ({
  type: "feed/postsFetched",
  payload: payload,
});

export async function fetchNext5Posts(dispatch, getState) {
  const offset = getState().feed.posts.length;
  dispatch(startLoading());
  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);
  const morePosts = res.data.rows;
  dispatch(postsFetched(morePosts));
}
