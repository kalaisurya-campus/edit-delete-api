import { USER_DATA_GET } from "../types";

const initialState = [];

const postReducer = (state = initialState, action) => {
    switch ((action.type)) {
        case USER_DATA_GET:
            return action.payload;
        default:
            return state;
    }
};

export default postReducer;
