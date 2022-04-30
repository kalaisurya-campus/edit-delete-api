import React from "react";
import FacebookLogin from "react-facebook-login";

function FaceBookOauth(props) {
    const responseFacebook = (response) => {
        console.log(response);
    };
    const componentClicked = (re) => {
        console.log(re);
    };
    return (
        <div>
            <FacebookLogin
                appId="861397347985739"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />
        </div>
    );
}

export default FaceBookOauth;
