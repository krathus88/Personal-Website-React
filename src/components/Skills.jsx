import React from "react";
import { useInView } from 'react-intersection-observer';
import Title from "./Title";
import SkillsTopic from "./SkillsTopic";
import ProgressBar from "./ProgressBar";
import progressBarData from "../progressBarData";
import LegendComponent from "./LegendComponent";
import Slider from "./Slider";

function Skills() {

    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = React.useState("Frontend");

    const [sliderPosition, setSliderPosition] = React.useState(12.5);

    // Checks if Skills is in View and if yes loads the ProgressBars
    const [ref, inView] = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });

    const handleItemClick = (index, category) => {
        const newPosition = (137.5 * index) + 12.5; // Formula: y(x) = 137.5x + 12.5
        setSliderPosition(newPosition);
        setSelectedCategory(category);
    };

    // Key to force re-rendering of ProgressBar components when selected category changes
    const [key, setKey] = React.useState(0);

    // Filter progress bar data based on the selected category
    const filteredProgressBarData = progressBarData.filter(data => data.category === selectedCategory);

    // Reset key when selected category changes
    React.useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [selectedCategory]);

    return (
        <div className="container-md mb-5" id="experience" ref={ref}>
            <Title title="Skills" />
            <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                <div className="mb-4">
                    <div className="row text-center font-secondary fs-5">
                        <SkillsTopic text="Frontend" onClick={() => handleItemClick(0, "Frontend")} />
                        <SkillsTopic text="Backend" onClick={() => handleItemClick(1, "Backend")} />
                        <SkillsTopic text="Technology" onClick={() => handleItemClick(2, "Technology")} />
                    </div>
                    <Slider 
                        sliderPosition={sliderPosition}
                        color="#00ffff"
                        position="static"
                        width="25%"
                    />
                </div>
                <div className="mt-2">
                    {filteredProgressBarData.map((data, index) => (
                        <ProgressBar 
                            key={`${key}-${index}`} // Change key when selected category changes
                            id={index}
                            value={data.value}
                            text={data.text}
                            hasScrolled={inView}
                        />
                    ))}
                </div>
                <div className="mt-5 text-center position-relative">
                    <div className="legend-line">
                        <LegendComponent 
                            position="0%"
                        />
                        <LegendComponent 
                            position="25%"
                            text="Basics"
                        />
                        <LegendComponent 
                            position="50%"
                            text="Intermediate"
                        />
                        <LegendComponent 
                            position="75%"
                            text="Advanced"
                        />
                        <LegendComponent 
                            position="100%"
                            text="Expert"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
