import React from "react";

function ProfileImage(props) {
    return (
        <img className="rounded-circle profile-image"
            aria-label="Placeholder" 
            focusable="false" 
            src={props.src} 
        />
    )
}

export default ProfileImage;
