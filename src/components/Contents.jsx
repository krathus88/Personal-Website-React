import React from "react";
import ContentBox from "./ContentsBox";
import Slider from "./Slider";
import contentBoxData from "../contentBoxData"

function Contents(props) {

    const [sliderPosition, setSliderPosition] = React.useState(0);

    function handleContentBoxClick(index) {
        // Set the slider position based on the clicked ContentBox index
        setSliderPosition(index * 100);
    };
    
    return (
        <div className="contents shadow">
            {contentBoxData.map((data, index) => (
                <ContentBox 
                    key={index}
                    id={index}
                    name={data.name}
                    href={data.href}
                    onClick={handleContentBoxClick}
                />
            ))}
            <Slider position={sliderPosition} />
        </div>
    )
}

export default Contents;
