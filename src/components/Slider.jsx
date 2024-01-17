import React from "react";

function Slider(props) {

    const sliderStyle = {
        transform: `translateX(${props.position}%)`
    }

    return (
        <div className="slider" style={sliderStyle}></div>
    );
}

export default Slider;
