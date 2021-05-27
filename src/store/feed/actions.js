export const startLoading = (payload) => ({
  type: "feed/startLoading",
  payload: payload,
});
export const postsFetched = (payload) => ({
  type: "feed/postsFetched",
  payload: payload,
});
//startLoading and postsFetched
