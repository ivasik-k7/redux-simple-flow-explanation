import {createStore, combineReducers} from "redux";

import nameReducer from "./reducers";

const reducers = combineReducers({
    nameReducer,
});

const store = createStore(reducers);

export default store;
