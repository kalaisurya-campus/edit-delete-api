import React, { useEffect, useState } from "react";

const getDataForm = () => {
    let data = localStorage.getItem("books");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};
function Todolist(props) {
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [place, SetPlace] = useState("");
    const [sore, SetStore] = useState(getDataForm());
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(sore));
    }, [sore]);
    const submits = (e) => {
        e.preventDefault();
        let book = {
            name,
            age,
            place,
        };
        SetStore([...sore, book]);
        SetName("");
        SetAge("");
        SetPlace("");
    };
    const removeItme = (name) => {
        const filters = sore.filter((Element, index) => {
            return Element.name !== name;
        });
        SetStore(filters);
    };
    return (
        <div>
            <form onSubmit={submits}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    onChange={(e) => SetName(e.target.value)}
                    value={name}
                />
                <br></br>
                <br></br>
                <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    onChange={(e) => SetAge(e.target.value)}
                    value={age}
                />
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="place"
                    placeholder="Chennai"
                    onChange={(e) => SetPlace(e.target.value)}
                    value={place}
                />
                <br></br>
                <br></br>
                <button typw="submit">Submit</button>
            </form>
            <br />
            <div>{sore.length === 0 && <di>No Data Found....</di>}</div>
            <div>
                {sore.length > 0 && (
                    <div>
                        {/* {sore.map((items, index) => {
                            return (
                                <>
                                    <p>{items.name}</p>
                                    <p>{items.age}</p>
                                    <p>{items.place}</p>
                                    <button
                                        onClick={() => removeItme(items.name)}
                                    >
                                        Remove
                                    </button>
                                </>
                            );
                        })} */}
                        <table class="table table-hover table-active">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Place</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sore.map((items, index) => {
                                    return (
                                        <>
                                            {/* <p>{items.name}</p>
                                    <p>{items.age}</p>
                                    <p>{items.place}</p>
                                    <button
                                        onClick={() => removeItme(items.name)}
                                    >
                                        Remove
                                    </button> */}
                                            <tr class="table-active">
                                                <td>{items.name}</td>
                                                <td>{items.age}</td>
                                                <td>{items.place}</td>
                                                <td>
                                                    <button
                                                        onClick={() =>
                                                            removeItme(
                                                                items.name
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                                <tr class="table-active"></tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Todolist;
