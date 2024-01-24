import React from "react";
import { useInView } from 'react-intersection-observer';
import Title from "./Title";
import SkillsTopic from "./SkillsTopic";
import ProgressBar from "./ProgressBar";
import progressBarData from "../progressBarData";

function Skills() {
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.8,
        triggerOnce: true,
    });

    return (
        <div className="container-md mb-5" id="experience" ref={ref}>
            <Title title="Skills" />
            <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                <div className="row text-center font-secondary fs-5 mb-3">
                    <SkillsTopic text="1" />
                    <SkillsTopic text="2" />
                    <SkillsTopic text="3" />
                </div>
                <div className="mt-2">
                    {progressBarData.map((data, index) => (
                        <ProgressBar 
                            key={index}
                            id={index}
                            value={data.value}
                            text={data.text}
                            hasScrolled={inView}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
