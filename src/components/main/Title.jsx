import React from "react";

function Title(props) {
    return (
        <div className="title-line mt-5 mb-4 ">
            <div className="line"></div>
            <h1 className="font-main fw-bold">{props.title}</h1>
            <div className="line"></div>
        </div>
    )
}

export default Title;
