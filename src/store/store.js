import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import listReducer from "./reducers/listReducer";

const store = createStore(listReducer, applyMiddleware(logger));

export default store;
