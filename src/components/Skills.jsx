import React from "react";
import Title from "./Title";
import SkillsTopic from "./SkillsTopic";
import ProgressBar from "./ProgressBar";
import progressBarData from "../progressBarData";

function Skills() {

    const [hasScrolled, setHasScrolled] = React.useState(false);

    React.useEffect(() => {
        const targetElement = document.getElementById("experience");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setHasScrolled(true);
                }
            });
        }, { threshold: 0.8 });

        if (targetElement) {
            observer.observe(targetElement);
        }

        return () => {
            if (targetElement) {
                observer.unobserve(targetElement);
            }
        };
    }, []);

    return (
        <div className="container mb-5" id="experience">
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
                            hasScrolled={hasScrolled}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
