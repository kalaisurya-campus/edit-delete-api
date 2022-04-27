import React, { useContext, useState } from "react";
import DataProviderapis from "./DataProvidersapi";

function NameData() {
    const { UserNames } = useContext(DataProviderapis);
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const Handlesubmits = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input type="password" class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NameData;
