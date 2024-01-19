import React from "react";

function PortfolioCard(props) {
    return (
        <div className="card overflow-hidden text-bg-dark rounded-4" 
            style={{ backgroundImage: `url(${props.bgImage})` }}
        >
            <p className="p-4 mb-0 description">{props.description}</p>
            <h3 className="mt-auto mb-0 px-4 pb-3 z-1">
                <a className="text-reset text-decoration-none font-secondary fw-bold" href={props.href}>{props.title}</a>
            </h3>
        </div>
    )
}

export default PortfolioCard;
