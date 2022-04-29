import React from 'react';

const Hero = () => {
    return (
      <div>
        <section>
          <div class="name">
            <h2>👋 Hi I am</h2>
            <h1 class="headings">Mahsa Irankhah</h1>
            <h3>Front-end developer, based in Iran</h3>
          </div>
          <a
            href="/index.html#contact"
            class="button-links contact-link shadow-sm"
            title="Go to Contact Me page"
          >
            Contact Me
          </a>
          <a
            href="/index.html#works"
            class="button-links my-work-link d-sm-none d-lg-inline shadow-sm"
            title="Go to projects section"
          >
            My Work<i class="fas fa-arrow-down"></i>
          </a>
        </section>
      </div>
    );
};

export default Hero;