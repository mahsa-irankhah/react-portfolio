import React from 'react';
import "./Project.scss";


const Project = (props) => {
    return (
      <div
        className={
          props.reverse
            ? "d-flex justify-content-evenly flex-row-reverse mt-5 mb-5 p-5"
            : "d-flex justify-content-evenly mt-5 mb-5 p-5"
        }
      >
        <div className="project-image-div">
          <img className="images shadow" src={props.image} alt="app" />
        </div>
        <div className="project-description">
          <h2 className="project-title fw-bold mb-4">{props.title}</h2>
          <p className="mb-5">{props.description}</p>
          <div className="mb-5">
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="launch-links shadow-sm"
              title="Go to App"
            >
              Launch the app
            </a>
          </div>
        </div>
      </div>
    );
};

export default Project;