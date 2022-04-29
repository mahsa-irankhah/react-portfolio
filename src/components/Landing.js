import React from 'react';

//components
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';



const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Projects />
        </div>
    );
};

export default Landing;