import React from "react";

function Slider(props) {

    const sliderStyle = {
        transform: `translateX(${props.sliderPosition}%)`,
        position: `${props.position}`,
        width: `${props.width}`
    }

    return (
        <div className="slider" style={sliderStyle}></div>
    );
}

export default Slider;
