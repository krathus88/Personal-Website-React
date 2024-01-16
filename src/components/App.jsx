import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Contents />
            
            <div className="container d-flex justify-content-center text-center pb-5 border-bottom" id="about">
                <div className="col-sm-12 col-md-8 col-lg-6 d-flex align-items-center flex-column pt-5">
                    <h1 className="font-main fw-bold">About Me</h1>
                    <p className="font-secondary">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                </div>
                <hr />
            </div>

            <div class="container col-10 my-5" id="experience">
                <h1 class="text-center font-main fw-bold">Skills</h1>
                <div class="row text-center font-secondary fs-5 pt-3 pb-1">
                    <div class="col-4 skill-item">hellooo</div>
                    <div class="col-4 skill-item">ree</div>
                    <div class="col-4 skill-item">ree</div>
                </div>
                <div class="slider"></div>
                <div class="pt-2">
                    <div class="progress mt-2">
                        <div class="progress-bar  bg-info justify-content-end align-items-start font-secondary fs-5 ps-4" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Python</div>
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

            <div class="container px-4 py-5 border-top border-bottom" id="custom-cards">
                <h1 class="text-center font-main fw-bold">Porfolio</h1>
                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
                            <div class="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                                <p class="p-5 description">This is a description that slides in.</p>
                                <h3 class="mt-auto display-7 font-secondary fw-bold z-1">
                                    <a class="link-unstyled" href="https://translate.google.pt/" target="_blank">
                                        Short title, long jacket
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div class="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                                <p class="p-5 description">This is a description that slides in.</p>
                                <h3 class="mt-auto display-7 font-secondary fw-bold z-1">
                                    <a class="link-unstyled" href="https://translate.google.pt/" target="_blank">
                                        Short title, long jacket
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
                            <div class="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                                <p class="p-5 description">This is a description that slides in.</p>
                                <h3 class="mt-auto display-7 font-secondary fw-bold z-1">
                                    <a class="link-unstyled" href="https://translate.google.pt/" target="_blank">
                                        Short title, long jacket
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container d-flex justify-content-center py-5 border-bottom" id="contact">
                <div class="col-sm-12 col-md-8 col-lg-6 d-flex align-items-center flex-column">
                    <h1 class="text-center font-main fw-bold pb-5">Get in Touch</h1>
                    <img class="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder" focusable="false" src="./assets/male-example.webp" />
                    <h2 class="font-secondary mt-2">Marco Ribeiro</h2>
                    <div class="mt-2">
                        <p class="font-secondary"><span class="fw-semibold">Email: </span>marcoribeiro4@hotmail.com</p>
                        <p class="font-secondary"><span class="fw-semibold">LinkedIn: </span><a href="https://www.linkedin.com/in/marco-ribeiro-663391204/" target="_blank"> Click Me</a></p>
                </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
}

export default App;
