import React from "react";
import Title from "./Title";
import ContainerSocial from "./ContainerSocial";

function About(props) {

    const stylingALinkedin = {
        backgroundColor: "#0d6efd"
    }

    const stylingSvgLinkedin = {
        border: "4px solid #0d6efd",
        color: "#0d6efd"
    }

    return (
        <div id="about" ref={props.passRef} className="container-md d-flex flex-column mb-5">
            <Title title="About" />
            <div className="text-center col-sm-12 col-md-10 col-lg-8 mx-auto my-auto">
                <p className="font-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis feugiat metus, in congue nibh posuere a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar nibh ac pellentesque vulputate. Fusce consequat justo et arcu faucibus imperdiet. Duis elementum efficitur tellus sit amet consequat. Mauris sapien neque, fermentum sagittis hendrerit quis, vestibulum at neque. Nullam ut ligula massa. Donec lobortis at erat at ullamcorper. Etiam tincidunt iaculis facilisis. Fusce eget augue et ex varius ultrices et at nulla. Nunc commodo augue ac pharetra dictum.
                </p>
                <p className="font-secondary">
                    Pellentesque id elit lorem. Curabitur mattis, odio vitae aliquam egestas, metus justo venenatis ligula, nec sodales augue libero sit amet risus. In leo nibh, feugiat ut vestibulum mattis, rhoncus ut diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam at dolor nec risus mattis dignissim. Praesent in faucibus leo. Vestibulum fringilla arcu metus, vel ultrices justo blandit in. Fusce vestibulum ultrices nibh in tincidunt. Donec dictum eros sit amet mi hendrerit aliquet vitae sit amet diam. Aliquam accumsan ipsum sit amet vulputate malesuada. Integer et suscipit elit. Nam convallis felis vel libero eleifend, a elementum risus placerat. Donec lacus eros, vulputate ut volutpat in, posuere vel elit.
                </p>
                <div className="mt-5">
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
    )
}

export default About;
