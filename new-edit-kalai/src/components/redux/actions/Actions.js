import axios from "axios";
import { USER_DATA_GET } from "../types";

// export const fetchadata = () => {
//     const response = Axios.get("https://jsonplaceholder.typicode.com/users");
// console.log("123",response);
//     return {
//         type: USER_DATA_GET,
//         payload: response.data,
//     };
// };

export const fetchadata = () => {
    return async (dispatch, getState) => {
        console.log(getState);
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        );
        console.log(response.data);
        dispatch({
            type: USER_DATA_GET,
            payload: response.data,
        });
    };
};
