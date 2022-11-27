import { createStore, combineReducers } from "redux";
import { reducerSearch, reducerFavorit, reducerInfo } from "./reducer";

const rootReducer = combineReducers({
  search: reducerSearch,
  favorit: reducerFavorit,
  info: reducerInfo,
});

const store = createStore(rootReducer);

export default store;
