import React, { useContext } from "react";
import DataProviderapis from "../usecontextapis/DataProvidersapi";

function Home(props) {
    const data = useContext(DataProviderapis);
    return (
        <div>
            {/* {data.first.length === 0 && <div>No Data Found users....</div>} */}
            {/* {data.second.length === 0 && <div>No Data Found Posts....</div>} */}
            {!data.loading ? (
                <div>Loading Datas users...... <img src={"https://cutewallpaper.org/21/no-background-gif/Animated-gif-transparent-background-14-GIF-Images-Download.gif"}/></div>
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
        </div>
    );
}

export default Home;
