import React from 'react';
import "./Hero.scss";

const Hero = () => {
    return (
      <div className="hero">
        <section>
          <div className="name">
            <h2 className="fw-bold">👋 Hi I am</h2>
            <h1 className="fw-bolder">Mahsa Irankhah</h1>
            <h3 className="fw-bold">Front-end developer</h3>
          </div>
          <a
            href="/index.html#contact"
            className="button-links contact-link shadow-sm"
            title="Go to Contact Me page"
          >
            Contact Me
          </a>
          <a
            href="/index.html#works"
            className="button-links my-work-link d-sm-none d-lg-inline shadow-sm"
            title="Go to projects section"
          >
            My Work <i className="fas fa-arrow-down"></i>
          </a>
        </section>
      </div>
    );
};

export default Hero;