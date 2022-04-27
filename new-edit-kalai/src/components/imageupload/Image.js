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
                            border: "4px solid red",
                            objectFit: "cover",
                            marginTop: "10px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    />
                    <button
                        onClick={Removeimage}
                        style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "orange",
                            padding: "15px",
                            borderRadius: "20px",
                            fontSize: "1.4rem",
                            fontWeight: "500",
                            cursor: "pointer",
                        }}
                    >
                        Remove Images
                    </button>
                </div>
            )}
        </div>
    );
}

export default Image;
