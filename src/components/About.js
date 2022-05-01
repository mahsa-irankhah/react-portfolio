import React from 'react';
import "./About.scss";

//components
import Footer from './Footer';
import Navbar from './Navbar';

//image
import mahsa from "../images/mahsairankhah.jpg";

const About = () => {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row about-content mb-5">
            <div className="col-lg-6 col-12">
              <h1>Mahsa Irankhah</h1>
              <h4 className="center mb-4">Front-end developer</h4>
              <p>
                I love coding and I work hard to improve my skills every day. I
                studied psychology in college. But as I realized I find
                technology feilds interesting I started investigating and trying
                different tech areas. I thought ux design suits me but when I
                first started coding, I literally fell in love with coding and
                software developement. Now, it's been a while since I started
                improving my knowledge in coding and I feel confident enough to
                anounce that I am a junior Front-end developer with a fair
                familiarity with UX design concepts. These are skills and
                Technologies I've learned and worked with so far:
              </p>
              <ul>
                <li>HTML/CSS</li>
                <li>Javascript and APIs</li>
                <li>Responsive Design</li>
                <li>bootstrap</li>
                <li>Github</li>
                <li>Netlify</li>
              </ul>
              <p>
                By the way, this portfolio is designed and coded from scratch
                all by myself.
              </p>
            </div>
            <div className="col-lg-6 col-12 pic-section">
              <div className="picture-border">
                <img
                  className="img-fluid"
                  src={mahsa}
                  alt="mahsa"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default About;