import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GetApiDatas, GetApisDatasPosts } from "./api/Get";
import DataProviderapis from "./DataProvidersapi";

function Notesdata(props) {
    const [first, setFirsts] = useState([]);

    const [second, setSecond] = useState([]);

    const [loading, SetLoding] = useState(false);

    const [loading1, SetLoding1] = useState(false);

    useEffect(() => {
        ApiDataGet();
        ApiPostsData();
    }, []);

    const ApiDataGet = () => {
        GetApiDatas().then((res) => {
            SetLoding(true);
            setFirsts(res.data, "users data");
            // console.log(res.data);
        });
    };

    const ApiPostsData = () => {
        GetApisDatasPosts().then((res) => {
            SetLoding1(true);
            setSecond(res.data);
            // console.log(res.data, "posts data");
        });
    };

    const UserNames = (name, email, password) => {
        console.log("received", name, email, password);
    };

    const ProvidersData = {
        first,
        loading,
        loading1,
        second,
        UserNames,
    };

    return (
        <>
            <DataProviderapis.Provider value={ProvidersData}>
                {props.children}
            </DataProviderapis.Provider>
        </>
    );
}

export default Notesdata;
