import React from "react";

function ContentBox(props) {
    function handleClick() {
        props.onClick(props.id);
    }

    return (
        <a
            className="col-3 py-3 text-center text-reset text-decoration-none cursor-pointer font-secondary"
            href={props.href}
            onClick={handleClick}
        >
            <h3 className="mb-0">{props.name}</h3>
        </a>
    )
}

export default ContentBox;
