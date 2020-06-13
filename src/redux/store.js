import { createStore, combineReducers } from "redux";
import settingsReducer from "./settings/settingsReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
});
const store = createStore(rootReducer);

export default store;
