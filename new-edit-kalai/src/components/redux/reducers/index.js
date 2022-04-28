import { combineReducers } from "redux";
import GETanothers from "./Anotheroad";
import postReducer from "./Userdetails";

const RootReducers = combineReducers({
    userDataTest: postReducer,
    anothers: GETanothers,
});

export default RootReducers;
