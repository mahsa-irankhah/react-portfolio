import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";

//components
import Project from "./Project";

//images
import todo from "../images/todo-app.png";
import weather from "../images/weather.png";
import dictionary from "../images/dictionary.png";
import shoppingCart from "../images/shoppin-cart.png";

const Projects = () => {
  return (
    <div id="work">
      <div className="projects">
        <Project
          image={todo}
          title="To do app"
          description="This app is built with HTML, CSS and Javascript. For mainaining the
            task list after reloading the page, I used Local Storage to get the
            data back from users' own browser."
          link="https://vigilant-carson-b870f0.netlify.app/"
          reverse={false}
        />
        <Project
          image={shoppingCart}
          title="Shopping Cart"
          description="Shopping Cart is one of the most important projects in my arsenal as I assume most real store projects need to include a shopping cart.
           And I think it was somehow challenging to build. I had to use Context as a state manager and also used useReducer hooks. I found coding this project absolutely useful as a practice."
          link="https://sparkling-smakager-2a677f.netlify.app/products"
          reverse={false}
        />
        <Project
          image={dictionary}
          title="Dictionary"
          description="This was a very exciting project we built with react.js and a dictionary API in final course of SheCodes.
           It was quite amazing building such a useful app and design it vintage-like."
          link="https://fastidious-sunburst-aac406.netlify.app/"
          reverse={true}
        />
        <Project
          image={weather}
          title="Weather app"
          description="For buildign this cool weather app, I used HTML, CSS, Javascript and Open Weather APIs. This weather app also shows forcast for next few days. I designed and built this app from scratch all by myself."
          link="https://zealous-dubinsky-7b3c23.netlify.app/"
          reverse={true}
        />
      </div>
      <div>
        <Link to="/work" className="more-projects">
          see more projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
