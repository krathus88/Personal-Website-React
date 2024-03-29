import React from "react";

function ProgressBar(props) {
    let styling = {};

    if (props.hasScrolled) {
        styling = {
            animation: "progressBarAnimation 0.5s ease-out forwards",
            animationDelay: `${props.id / 2.5}s`
        }
    }
    
    return (
        <div 
            className="progress mt-2 progress-bar"
            role="progressbar" 
            style={styling}
        >
            <span 
                className="bg-info text-start font-secondary fs-5 ps-4" 
                aria-valuenow={props.value}
                style={{ width: `${props.value}%` }} 
            >
                {props.text}
            </span>
        </div>
    )
}

export default ProgressBar;
