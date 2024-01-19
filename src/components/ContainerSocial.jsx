import React from "react";

function ContainerSocial(props) {
    return (
        <a className="container-social text-decoration-none rounded-3" href={props.href} style={props.stylingA} target="_blank" rel="noreferrer">
            <svg class={`social-icon ${props.classSVG}`} style={props.stylingSVG} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox={props.viewBox ? props.viewBox : "0 0 16 16"}>
                {props.path}
            </svg>
            <p className="text-white p-social">{props.text}</p>
        </a>
    )
}

export default ContainerSocial;
