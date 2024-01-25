import React from "react";
import ContentsBox from "./ContentsBox";
import Slider from "./Slider";
import contentsBoxData from "../contentsBoxData"

function Contents(props) {

    const [sliderPosition, setSliderPosition] = React.useState(props.currentSectionIndex * 100);

    React.useEffect(() => {
        // Update the slider position whenever the currentSectionIndex changes
        setSliderPosition(props.currentSectionIndex * 100);
    }, [props.currentSectionIndex]);

    function handleSliderPosition(index) {
        // Set the slider position based on the clicked ContentBox index
        setSliderPosition(index * 100);
    }
    
    return (
        <div className="contents shadow">
            {contentsBoxData.map((data, index) => (
                <ContentsBox 
                    key={index}
                    id={index}
                    name={data.name}
                    href={data.href}
                    onClick={() => handleSliderPosition(index)}
                />
            ))}
            <Slider 
                sliderPosition={sliderPosition}
                position="absolute"
                width="25%"
            />
        </div>
    )
}

export default Contents;
