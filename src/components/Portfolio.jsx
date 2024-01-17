import React from "react";
import PortfolioCard from "./PortfolioCard";
import Title from "./Title";

function Portfolio() {
    return (
        <div class="container my-5" id="portfolio">
            <Title title="Portfolio" />
            <div class="row row-cols-1 row-cols-lg-3 my-4">
                <PortfolioCard 
                    title="Project 1"
                    description="Hello world"
                    bgImage="./assets/michelangelo.jpg" 
                    href="https://translate.google.pt/" 
                />
                <PortfolioCard 
                    title="Project 2"
                    description="Hello world"
                    bgImage="./assets/michelangelo.jpg" 
                    href="https://translate.google.pt/" 
                />
                <PortfolioCard 
                    title="Project 2"
                    description="Hello world"
                    bgImage="./assets/michelangelo.jpg" 
                    href="https://translate.google.pt/" 
                />
            </div>
        </div>
    )
}

export default Portfolio;
