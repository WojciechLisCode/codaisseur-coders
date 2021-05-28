// src/store/postPage/actions.js
import axios from "axios";
import { API_URL } from "../../config";

export const startLoadingPost = () => ({
  type: "post/startLoading",
});

export const postFullyFetched = (data) => ({
  type: "post/postsFetched",
  payload: data,
});

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
