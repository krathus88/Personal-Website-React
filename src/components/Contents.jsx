import React from "react";
import ContentBox from "./ContentsBox";
import Slider from "./Slider";

function Contents(props) {

    const [sliderPosition, setSliderPosition] = React.useState(0);
    
    function handleContentBoxClick(index) {
        // Set the slider position based on the clicked ContentBox index
        setSliderPosition(index * 100);
    };
    
    return (
        <div className="contents">
            <ContentBox 
                id="0"
                name="Home"
                href="#home"
                onClick={handleContentBoxClick}
            />
            <ContentBox 
                id="1"
                name="About"
                href="#about"
                onClick={handleContentBoxClick}
            />
            <ContentBox 
                id="2"
                name="Experience"
                href="#experience"
                onClick={handleContentBoxClick}
            />
            <ContentBox 
                id="3"
                name="Contact"
                href="#contact"
                onClick={handleContentBoxClick}
            />
            <Slider position={sliderPosition} />
        </div>
    )
}

export default Contents;
