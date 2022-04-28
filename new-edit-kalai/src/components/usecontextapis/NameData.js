import React, { useContext, useState } from "react";
import DataProviderapis from "./DataProvidersapi";

function NameData() {
    const { UserNames } = useContext(DataProviderapis);
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const Handlesubmits = (e) => {
        e.preventDefault();
        console.log("emails", name, email, password);
        UserNames(name, email, password);
    };
    return (
        <div>
            <form onSubmit={Handlesubmits}>
                <h1>Login </h1>
                <hr />
                <label htmlFor="name">name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    onChange={(e) => SetName(e.target.value)}
                />

                <label htmlFor="user">email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    onChange={(e) => SetEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(e) => SetPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default NameData;
