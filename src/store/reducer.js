// src/store/reducer.js
import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";

const reducer = combineReducers({
  feed: feedReducer,
  // etc...
});

export default reducer;
