import React from "react";
import Title from "../Title";
import ContainerSocial from "../../ContainerSocial";

function About(props) {
  const stylingALinkedin = {
    backgroundColor: "#0d6efd",
  };

  const stylingSvgLinkedin = {
    border: "4px solid #0d6efd",
    color: "#0d6efd",
  };

  return (
    <div
      id="about"
      ref={props.passRef}
      className="container-md d-flex flex-column mb-md-5"
    >
      <Title title="About" />
      <div className="text-center col-sm-12 col-md-10 col-lg-8 mx-auto my-auto font-secondary">
        <p>
          Hi there! I'm Marco, a young programmer originally from Portugal, now
          calling London my home. My journey in programming has been driven by a
          deep curiosity and a love for learning.
        </p>
        <p>
          I specialize in Python, JavaScript, and various development tools,
          both frontend and backend. Having gained experience through both
          structured learning and hands-on projects, I'm always eager to tackle
          new challenges and expand my skills further.
        </p>
        <p>
          Currently, I'm seeking opportunities to contribute to meaningful
          projects where I can apply my growing expertise. If your company is
          looking for a dedicated coder who's ready to collaborate and learn,
          I'd be delighted to chat. Feel free to reach out via the contact page
          below!
        </p>
        <div className="mt-5">
          <ContainerSocial
            text="Connect on LinkedIn"
            href="https://www.linkedin.com/in/marco-ribeiro-663391204/"
            stylingA={stylingALinkedin}
            stylingSVG={stylingSvgLinkedin}
            viewBox="1 1 14 14"
            classSVG="bi bi-linkedin"
            path={
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
