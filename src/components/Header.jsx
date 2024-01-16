import React from "react";

function Header() {
  return (
    <header id="home" className="row py-2 align-items-center shadow-lg">
        <div className="col-md-6 p-3 p-md-5 pt-md-3">
            <h2 className="text-center font-secondary">Hi,</h2>
            <h1 className="display-4 fw-bolder lh-1 text-body-emphasis text-center font-main">I'm Marco</h1>
            <p className="lead text-center font-secondary">a programmer</p>
        </div>
        <div className="col-md-6 p-0 overflow-hidden shadow-lg">
            <img className="rounded-start-3" src={process.env.PUBLIC_URL + "/assets/michelangelo.jpg"} alt="Picture of Marco" width="100%" style={{objectFit: "cover", minHeight: "360px"}} />
        </div>
    </header>
  );
}

export default Header;
