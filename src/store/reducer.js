// src/store/reducer.js
import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";
import postPageReducer from "./postPage/reducer";

const reducer = combineReducers({
  feed: feedReducer,
  postPage: postPageReducer,
  // etc...
});

export default reducer;
