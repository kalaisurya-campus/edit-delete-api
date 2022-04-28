// FIRST CHECK Datas in main function in mail olders

import {
    USER_DATA_GET_ERROR,
    USER_DATA_GET_REQUEST,
    USER_DATA_GET_SUCCESS,
} from "../types";

// import { USER_DATA_GET } from "../types";

// const initialState = [];

// const postReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case USER_DATA_GET:
//             return action.payload;
//         default:
//             return state;
//     }
// };

// export default postReducer;

// end function uin alls

// second function all function start middle wares

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case USER_DATA_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case USER_DATA_GET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
export default postReducer;

// second function all function end middle wares
