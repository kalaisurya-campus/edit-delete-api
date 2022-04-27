import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Formsdata(props) {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const history = useHistory();
    const emails = (e) => {
        SetEmail(e.target.value);
    };
    const passwords = (e) => {
        SetPassword(e.target.value);
    };
    useEffect(() => {
        if (localStorage.getItem("auth")) history.push("/");
    }, []);
    const handlesubmits = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email === "kalai@gmail.com" && password === "123") {
            history.push("/");
        }
        localStorage.setItem("auth", true);
        SetEmail("");
        SetPassword("");
    };
    const names = typeof "welcome";
    return (
        <div className="container">
            {/* <form onSubmit={handlesubmits}>
                <input
                    type="email"
                    onChange={emails}
                    name="email"
                    value={email}
                    placeholder="Enter the Email Address"
                />
                <input
                    type="password"
                    onChange={passwords}
                    name="password"
                    value={password}
                    placeholder="Enter the Password"
                />
                <button>login</button>
            </form> */}
            <h1>{names}</h1>
            <form onSubmit={handlesubmits}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={emails}
                        name="email"
                        value={email}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        onChange={passwords}
                        name="password"
                        value={password}
                    />
                </div>
                <div class="mb-3 form-check">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Formsdata;
