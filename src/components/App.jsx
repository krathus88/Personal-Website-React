import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import { useInView } from 'react-intersection-observer';

function App() {

    const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);

    // Use useInView for each section
    const { ref: headerIntersectionRef } = useInView({
        threshold: 0.2,
        onChange: (headerInView) => {
            if (headerInView) {
                setCurrentSectionIndex(0);
            }
        },
    });

    const { ref: aboutIntersectionRef } = useInView({
        threshold: 1,
        onChange: (aboutInView) => {
            if (aboutInView) {
                setCurrentSectionIndex(1);
            }
        },
    });

    const { ref: portfolioIntersectionRef } = useInView({
        threshold: 0.4,
        onChange: (portfolioInView) => {
            if (portfolioInView) {
                setCurrentSectionIndex(2);
            }
        },
    });

    const { ref: contactIntersectionRef } = useInView({
        threshold: 0.9,
        onChange: (inView) => {
            if (inView) {
                setCurrentSectionIndex(3);
            }
        },
    });

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header passRef={headerIntersectionRef} />
            <Contents currentSectionIndex={currentSectionIndex} />  
            <About passRef={aboutIntersectionRef} />
            <div ref={portfolioIntersectionRef}>
                <Portfolio />
                <Skills />
            </div>
            <Contact passRef={contactIntersectionRef} />
            <Footer />
        </div>
    );
}

export default App;
