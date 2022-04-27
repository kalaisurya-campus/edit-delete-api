import React from "react";
import { Link } from "react-router-dom";
let url;
function Firsts(props) {
    url = props.match.url;
    return (
        <div>
            <Link to={`${url}/second`}>Second Match</Link><br/>
            <Link to={`${url}/third`}>Third Match</Link>
        </div>
    );
}

export default Firsts;
