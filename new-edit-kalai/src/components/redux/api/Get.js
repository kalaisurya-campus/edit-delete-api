import axios from "axios";

export default function userGetData() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}
