import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Contents />  
            <About />
            <Portfolio />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
