import axios from "axios";
import {
    USERS_ANOTHER_GET_DATA,
    USERS_ANOTHER_GET_DATA_ERROR,
    USERS_ANOTHER_GET_DATA_REQUEST,
    USERS_ANOTHER_GET_DATA_SUCCESS,
    USER_DATA_GET,
    USER_DATA_GET_ERROR,
    USER_DATA_GET_REQUEST,
    USER_DATA_GET_SUCCESS,
} from "../types";
// {"first check redux concepts statr"}
// export const fetchadata = () => {
//     const response = Axios.get("https://jsonplaceholder.typicode.com/users");
// console.log("123",response);
//     return {
//         type: USER_DATA_GET,
//         payload: response.data,
//     };
// };

// end start redux concepts

// main fetch data in redx start function s

// export const fetchadata = () => {
//     return async (dispatch, getState) => {
//         console.log(getState);
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/users`
//         );
//         console.log(response.data);
//         dispatch({
//             type: USER_DATA_GET,
//             payload: response.data,
//         });
//     };
// };

// NEW ACTIONS METHODS

export const fetchadata = () => async (dispatch, getState) => {
    dispatch({ type: USER_DATA_GET_REQUEST });
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        );
        dispatch({ type: USER_DATA_GET_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: USER_DATA_GET_ERROR, error: "no Data Found" });
    }
};

// export const anotherfetchdata = () => {
//     return async (dispatch, getState) => {
//         console.log(getState);

//         const res = await axios.get(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         console.log("12", res.data);
//         dispatch({
//             type: USERS_ANOTHER_GET_DATA,
//             value: res.data,
//         });
//     };
// };

// end function in main functions

export const anotherfetchdata = () => async (dispatch, getState) => {
    dispatch({ type: USERS_ANOTHER_GET_DATA_REQUEST });
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch({
            type: USERS_ANOTHER_GET_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: USERS_ANOTHER_GET_DATA_ERROR,
            error: "no Data Found",
        });
    }
};
