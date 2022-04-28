// import { USERS_ANOTHER_GET_DATA } from "../types";

import {
    USERS_ANOTHER_GET_DATA_ERROR,
    USERS_ANOTHER_GET_DATA_REQUEST,
    USERS_ANOTHER_GET_DATA_SUCCESS,
} from "../types";

// const initialState = [];
// const GETanothers = (state = initialState, action) => {
//     switch (action.type) {
//         case USERS_ANOTHER_GET_DATA:
//             return action.value;
//         default:
//             return state;
//     }
// };

// export default GETanothers;

const initialState = {
    itemdata: [],
    loading: false,
    error: null,
};

const GETanothers = (state = initialState, action) => {
    switch (action.type) {
        case USERS_ANOTHER_GET_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case USERS_ANOTHER_GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                itemdata: action.payload,
            };
        case USERS_ANOTHER_GET_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
export default GETanothers;
