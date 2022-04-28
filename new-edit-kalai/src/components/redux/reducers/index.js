import { combineReducers } from "redux";
import postReducer from "./Userdetails";

const RootReducers = combineReducers({
    userDataTest: postReducer,
});

export default RootReducers;
