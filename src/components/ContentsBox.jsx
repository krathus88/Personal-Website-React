import React from "react";

function ContentsBox(props) {
    function handleClick() {
        props.onClick(props.id);
    }

    return (
        <a
            className="col-3 py-3 text-center text-reset text-decoration-none cursor-pointer font-main"
            href={props.href}
            onClick={handleClick}
            data-index={props.id}
        >
            <h3 className="mb-0">{props.name}</h3>
        </a>
    );
};

export default ContentsBox;
