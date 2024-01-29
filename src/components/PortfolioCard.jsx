import React from "react";

function PortfolioCard(props) {

    // Split the description into separate lines
    const descriptionLines = props.description.split('\n');

    return (
        <div className="card overflow-hidden text-bg-dark rounded-4">
            <img className="card-img-top" src={props.bgImage} alt={props.title} />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="description px-5 py-4">
                    {descriptionLines.map((line, index) => (
                        <p key={index} className="mb-0">{line}</p>
                    ))}
                </div>
                <h3 className="mt-auto mb-0 px-4 pb-3 z-1">
                    <a className="bg-dark p-1 rounded text-reset text-decoration-none font-secondary fw-bold" href={props.href}>{props.title}</a>
                </h3>
            </div>
        </div>
    )
}

export default PortfolioCard;
