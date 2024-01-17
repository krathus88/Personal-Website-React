import React from "react";
import Title from "./Title";

function Skills() {
    return (
        <div class="container col-sm-12 col-md-10 col-lg-8" id="experience">
            <Title title="Skills" />
            <div class="row text-center font-secondary fs-5 pt-3 pb-1">
                <div class="col-4 skill-item">hellooo</div>
                <div class="col-4 skill-item">ree</div>
                <div class="col-4 skill-item">ree</div>
            </div>
            <div class="pt-2">
                <div class="progress mt-2">
                    <div class="progress-bar bg-info justify-content-end align-items-start font-secondary fs-5 ps-4" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Python</div>
                </div>
                <div class="progress mt-2">
                    <div class="progress-bar bg-info justify-content-end align-items-start font-secondary fs-5 ps-4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mt-2">
                    <div class="progress-bar bg-info justify-content-end align-items-start font-secondary fs-5 ps-4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mt-2">
                    <div class="progress-bar bg-info justify-content-end align-items-start font-secondary fs-5 ps-4" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
