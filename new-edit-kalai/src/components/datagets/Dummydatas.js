import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { anotherfetchdata } from "../redux/actions/Actions";

function Dummydatas(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(anotherfetchdata());
    }, []);
    return (
        <div>
            {/* {selectors.length === 0 && <div>No Data Found</div>}
            {selectors.map((ty, index) => {
                return (
                    <div key={index}>
                        <p>{ty.body}</p>
                    </div>
                );
            })} */}

            {state.anothers.itemdata.map((tr, index) => {
                return (
                    <div key={index}>
                        <p>{tr.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Dummydatas;
