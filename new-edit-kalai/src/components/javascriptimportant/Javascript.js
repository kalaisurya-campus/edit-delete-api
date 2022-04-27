import React, { useState } from "react";

function Javascript(props) {
    const datas = [1, 2, 3, 4, 5, 6];
    const objects = { name: "kalai", age: 34, place: "place" };
    console.log(datas.length);

    const [names, SetNames] = useState("kalaisurya");
    datas.push("kalaisurya");
    const empty = [];
    const name = [];
    const numbers = [];

    if (!datas) {
        alert("welcome");
    } else {
        // for (let i = 0; i < datas.length; i++) {
        //     console.log(i);
        //     empty.push(i);
        // }
        // datas.forEach((element) => {
        //     if (element === "kalaisurya") {
        //         name.push(element);
        //     } else {
        //         for (let i = 0; i < datas.length; i++) {
        //             numbers.push(i);
        //         }
        //     }
        // });
        console.log("no data false");
    }

    const chnagename = () => {
        SetNames("kalai");
    };

    console.log(datas);
    // console.log(names);
    const lastname = "thala";
    const ft = () => {
        switch ((names, lastname)) {
            case "kalaisurya":
                return console.log("welcome kalaisurya");
                break;
            case "kalai":
                return alert("kalai");
                break;
            case "surya":
                return alert("surya");
                break;
            case "thala":
                return console.log("thala");
                break;
            default:
                return console.log("no Name Data");
        }
    };

    console.table(objects);

    ft();
    var now = new Date();
    var getdates = now.getDate();
    var days = now.getDay();
    var years = now.getTime();
    console.log("dates", getdates);
    console.log("days", days);
    console.log("days", years);
    return (
        <div>
            gfd
            <button onClick={chnagename}>click change names</button>
            {numbers.map((items, index) => {
                return (
                    <div>
                        <p>{items}</p>
                    </div>
                );
            })}
            {empty.map((items, index) => {
                return (
                    <div key={index}>
                        <p>{items}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Javascript;
