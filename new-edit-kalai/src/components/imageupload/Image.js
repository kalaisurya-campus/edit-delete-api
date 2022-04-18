import React, { useState } from "react";

function Image(props) {
    const [setimages, SetImages] = useState();

    const images = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files[0]);
            localStorage.setItem("images", JSON.stringify(e.target.files[0]));
            SetImages(e.target.files[0]);
        }
    };
    const onSubmits = (e) => {
        e.preventDefault();
        alert(URL.createObjectURL(setimages));
    };

    const Removeimage = () => {
        SetImages();
    };
    return (
        <div>
            <h1> image upload</h1>
            <form onSubmit={onSubmits}>
                <input
                    type="file"
                    className="form-control"
                    onChange={images}
                    accept="image/*"
                    required
                />
                <button type="submit" className="btn btn-primary">
                    Upload Button
                </button>
            </form>
            {setimages && (
                <div>
                    <img
                        src={URL.createObjectURL(setimages)}
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            border: "2px solid red",
                        }}
                    />
                    <button onClick={Removeimage}>Remove Images</button>
                </div>
            )}
        </div>
    );
}

export default Image;
