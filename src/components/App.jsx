import React from "react";
import Header from "./main/Header/Header";
import Footer from "./main/Footer/Footer";
import Contents from "./main/Contents/Contents";
import About from "./main/About/About";
import Portfolio from "./main/Portfolio/Portfolio";
import Skills from "./main/Skills/Skills";
import Contact from "./main/Contact/Contact";
import { useInView } from "react-intersection-observer";

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);

  // Use useInView for each section
  // Header
  const { ref: headerIntersectionRef } = useInView({
    threshold: 0.2,
    onChange: (headerInView) => {
      if (headerInView) {
        setCurrentSectionIndex(0);
      }
    },
  });

  // About
  const { ref: aboutIntersectionRef } = useInView({
    threshold: 0.7,
    onChange: (aboutInView) => {
      if (aboutInView) {
        setCurrentSectionIndex(1);
      }
    },
  });

  // Portfolio + Skills
  const { ref: portfolioIntersectionRef } = useInView({
    threshold: 0.4,
    onChange: (portfolioInView) => {
      if (portfolioInView) {
        setCurrentSectionIndex(2);
      }
    },
  });

  // Contact
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
