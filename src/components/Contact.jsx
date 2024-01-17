import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div class="container text-center py-5" id="contact">
            <Title title="Get in Touch" />
            <img class="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder" focusable="false" src="./assets/male-example.webp" />
            <h2 class="font-secondary mt-2">Marco Ribeiro</h2>
            <div class="mt-2">
                <p class="font-secondary"><span class="fw-semibold">Email: </span>marcoribeiro4@hotmail.com</p>
                <p class="font-secondary"><span class="fw-semibold">LinkedIn: </span><a href="https://www.linkedin.com/in/marco-ribeiro-663391204/"> Click Me</a></p>
            </div>
        </div>
    )
}

export default Contact;
