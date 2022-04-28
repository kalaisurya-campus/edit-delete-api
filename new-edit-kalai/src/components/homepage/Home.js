import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DataProviderapis from "../usecontextapis/DataProvidersapi";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchadata } from "../redux/actions/Actions";
function Home(props) {
    const data = useContext(DataProviderapis);
    const [logout, SetLogout] = useState(false);
    console.log("datas providers", data);
    const history = useHistory();
    const dispatch = useDispatch();
    const usetext = useSelector((state) => state.userDataTest);
    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            history.push("/login");
        }
    }, [logout]);
    useEffect(() => {
        dispatch(fetchadata());
    }, []);

    console.log("testx", usetext);

    const handlesubmits = (e) => {
        e.preventDefault();
        localStorage.removeItem("auth");
        SetLogout(true);
    };

    console.log("dispatched kalaisurya", props.uerdhilip);

    return (
        <div>
            {/* {data.first.length === 0 && <div>No Data Found users....</div>} */}
            {/* {data.second.length === 0 && <div>No Data Found Posts....</div>} */}

            <button
                onClick={handlesubmits}
                style={{
                    border: "none",
                    backgroundColor: "red",
                    color: "white",
                    padding: "15px",
                    outline: "none",
                    borderRadius: "20px",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                }}
            >
                Logout
            </button>
            <button
                onClick={data.UserNames}
                className="mb-3 mt-4 ms-2"
                style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "orange",
                    borderRadius: "20px",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    padding: "15px",
                }}
            >
                Click Button Data
            </button>
            {!data.loading ? (
                <div>
                    Loading Datas users......{" "}
                    <img
                        src={
                            "https://cutewallpaper.org/21/no-background-gif/Animated-gif-transparent-background-14-GIF-Images-Download.gif"
                        }
                    />
                </div>
            ) : (
                <div>
                    {data.first.map((items, index) => {
                        return (
                            <div>
                                <p>{items.name}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            {!data.loading1 ? (
                <div>
                    Loading Datas possts......{" "}
                    <img
                        src={
                            "https://acegif.com/wp-content/uploads/loading-36.gif"
                        }
                    />
                </div>
            ) : (
                <div>
                    {data.second.map((item, index) => {
                        return (
                            <div>
                                <p>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            <div>
                <h1>welocme too home page api get datas</h1>
                {usetext.length === 0 && <div>No Data Found</div>}
                {usetext.map((its, index) => {
                    return (
                        <div key={index}>
                            <p>{its.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withRouter(Home);
