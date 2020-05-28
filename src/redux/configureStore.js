// configureStore.js
// Create store and combine reducers
// Dont have a comfortable understanding of this file.

import { createStore, applyMiddleware, combineReducers } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

// Imported Reducers to be combined
import resourceReducer from "./modules/resource";
import appReducer from "./modules/app";
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
)(createStore);

const reducer = combineReducers({
  appReducer,
  resourceReducer,
});

const configureStore = (initialState) =>
  createStoreWithMiddleware(reducer, initialState);

export default configureStore;
