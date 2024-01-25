import React from "react";

function SkillsTopic(props) {
    return (
        <div className="col-4 skill-item" onClick={props.onClick}>{props.text}</div>
    )
}

export default SkillsTopic;
