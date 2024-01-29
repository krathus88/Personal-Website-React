import React from "react";

function CustomCarouselArrow(props) {
    return (
        <button {...props} class={`btn custom-btn position-absolute rounded-4 ${props.classButton}`} aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                {props.svgPath}
            </svg>
        </button>
    )
}

export default CustomCarouselArrow;
