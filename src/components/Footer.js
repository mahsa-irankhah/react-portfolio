import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
      <div>
        <footer>
          <div class="icon-links text-center">
            <a
              href="https://www.linkedin.com/in/mahsa-irankhah-185bb21b9/?originalSubdomain=ir"
              target="_blank"
              rel="noreferrer"
              title="linkedIn profile"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/mahsa-irankhah"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github" title="github profile"></i>
            </a>
            <a href="mailto:m.irankhah1995@gmail.com" title="email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
          <p class="text-center fw-bold fs-6 source-link-part">
            <a
              href="https://github.com/mahsa-irankhah/react-portfolio"
              target="_blank"
              rel="noreferrer"
              title="open Github repository"
            >
              open-source
            </a>{" "}
            coded by Mahsa Irankhah
          </p>
        </footer>
      </div>
    );
};

export default Footer;