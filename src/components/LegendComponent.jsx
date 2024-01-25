import React from "react";

function LegendComponent(props) {

    const stylingMarker = {
        left: `${props.position}`
    }

    return (
        <div className="marker" style={stylingMarker}>
            <div className="vertical-line"></div>
            <span>{props.text}</span>
        </div>
    )
}

export default LegendComponent;
