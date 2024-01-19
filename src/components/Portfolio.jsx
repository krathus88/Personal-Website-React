import React from "react";
import Slider from "react-slick";
import PortfolioCard from "./PortfolioCard";
import Title from "./Title";
import ContainerSocial from "./ContainerSocial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolioCardData from "../portfolioCardData";

function Portfolio() {

    const stylingAGithub = {
        backgroundColor: "#010409"
    }

    const stylingSvgGithub = {
        border: "4px solid #010409",
        color: "#fff",
        backgroundColor: "#010409"
    }

    // Settings for the react-slick slider
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="container mb-5" id="portfolio">
            <Title title="Portfolio" />
            <div className="overflow-visible" id="portfolio-projects">
                <Slider {...sliderSettings}>
                    {portfolioCardData.map((data, index) => (
                        <PortfolioCard 
                            key={index}
                            title={data.title}
                            description={data.description}
                            bgImage={data.bgImage}
                            href={data.href}
                        />
                    ))}
                </Slider>
            </div>
            <div className="text-center mt-5">
                <ContainerSocial 
                    text="Find out More"
                    href="https://github.com/krathus88?tab=repositories"
                    stylingA = {stylingAGithub}
                    stylingSVG = {stylingSvgGithub}
                    classSVG = "bi bi-github"
                    path={<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>}
                />
            </div>
        </div>
    )
}

export default Portfolio;
