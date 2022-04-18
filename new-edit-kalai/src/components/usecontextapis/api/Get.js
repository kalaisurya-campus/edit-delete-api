import axios from "axios";

export function GetApiDatas() {
    return axios.get("http://jsonplaceholder.typicode.com/users");
}

export function GetApisDatasPosts() {
    return axios.get("http://jsonplaceholder.typicode.com/posts");
}
