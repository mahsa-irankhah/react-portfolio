import React from 'react';

//components
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';




const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Landing;