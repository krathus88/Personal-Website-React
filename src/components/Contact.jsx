import React from "react";
import Title from "./Title";
import ProfileImage from "./ProfileImage";
import ContainerSocial from "./ContainerSocial";

function Contact(props) {

    const stylingALinkedin = {
        backgroundColor: "#0d6efd"
    }

    const stylingSvgLinkedin = {
        border: "4px solid #0d6efd",
        color: "#0d6efd"
    }

    return (
        <div id="contact" ref={props.passRef} className="container-md d-flex flex-column mb-5">
            <Title title="Get in Touch" />
            <div className="d-flex justify-content-center my-auto">
                <div className="card align-items-center text-center col-12 col-lg-10 col-xl-9 col-xxl-8 rounded-5 shadow-lg">
                    <div className="card-header">
                        <ProfileImage src="./assets/contact-img.jpg" />
                        <h2 className="font-secondary">Marco Ribeiro</h2>
                    </div>
                    <div className="card-body">
                        <p>Thanks for visiting! Feel free to contact me through one of the methods below.</p>
                        <div className="mt-4">
                            <ContainerSocial 
                                text="Connect on LinkedIn"
                                href="https://www.linkedin.com/in/marco-ribeiro-663391204/"
                                stylingA = {stylingALinkedin}
                                stylingSVG = {stylingSvgLinkedin}
                                viewBox = "1 1 14 14"
                                classSVG = "bi bi-linkedin"
                                path = {<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
