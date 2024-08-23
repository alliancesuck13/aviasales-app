/* eslint-disable indent */
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import logger from "./middleware/logger";
import ticketFilterMiddleware from "./middleware/ticketFilterMiddleware";
import loadReducer from "./reducers/loadReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({ loadReducer, filterReducer });

const store = createStore(rootReducer, applyMiddleware(ticketFilterMiddleware, logger));

export default store;
