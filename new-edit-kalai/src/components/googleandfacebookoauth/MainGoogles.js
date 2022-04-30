import React from "react";
import FaceBookOauth from "./FaceBookOauth";
import GoggleOauth from "./GoggleOauth";

function MainGoogles(props) {
    return (
        <div>
            <GoggleOauth />
            <FaceBookOauth />
        </div>
    );
}

export default MainGoogles;
