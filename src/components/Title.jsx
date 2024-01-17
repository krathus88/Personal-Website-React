import React from "react";

function Title(props) {
    return (
        <div class="title-line mt-5 mb-4 ">
            <div class="line"></div>
            <h1 class="font-main fw-bold">{props.title}</h1>
            <div class="line"></div>
        </div>
    )
}

export default Title;
