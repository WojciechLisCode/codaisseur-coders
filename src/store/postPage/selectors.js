export const selectPostAndComments = (reduxState) => {
  if (!reduxState.postPage.loading) {
    return {
      post: reduxState.postPage.post,
      comments: reduxState.postPage.comments,
    };
  } else {
    return null;
  }
};
