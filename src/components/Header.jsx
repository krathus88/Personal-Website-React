import React from "react";

function Header(props) {
  return (
    <header id="home" ref={props.passRef} className="row py-md-2 align-items-center">
        <div className="col-md-5 text-center p-3 mb-md-5">
            <h2 className="font-secondary">Hi,</h2>
            <h1 className="display-4 font-main fw-bolder text-body-emphasis lh-1">I'm Marco</h1>
            <p className="lead font-secondary mb-0">a programmer</p>
        </div>
        <div className="col-md-7 p-0">
            <img 
                className="rounded-start-3 bg-image-header" 
                src={"./assets/background-header.jpg"} 
                alt="Marco" 
            />
        </div>
    </header>
  );
}

export default Header;
