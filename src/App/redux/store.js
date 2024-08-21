/* eslint-disable indent */
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import logger from "./middleware/logger";
import loadReducer from "./reducers/loadReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({ loadReducer, filterReducer });

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
