import React, { useEffect } from "react";
import "./Projects.scss";

//components
import Project from "./Project";
import Navbar from "./Navbar";

//images
import todo from "../images/todo-app.png";
import weather from "../images/weather.png";
import hangman from "../images/hangman.png";
import taylor from "../images/taylorswift.png";
import portfolio from "../images/portfolio.png";
import dictionary from "../images/dictionary.png";
import shoppingCart from "../images/shoppin-cart.png";
import form from "../images/form.png";
import messenger from "../images/messenger.png";
import reactWeather from "../images/react-weather.png";
import crypto from "../images/crypto.png";


const Projects = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="projects">
        <Project
          image={portfolio}
          title="My Portfolio"
          description="I built this portfolio by react.js and styled using SASS.
          this very portfolio has a vanilla js version which you can
          check the code in my GitHub. My motive to rebuild this portfolio with react was
          to improve the UX by using SPA so the users can browse around faster through my website."
          link="https://snazzy-blancmange-fb7275.netlify.app/"
          reverse={false}
        />
        <Project
          image={dictionary}
          title="Dictionary"
          description="This was a very exciting project we built with react.js and a dictionary API in final course of SheCodes.
           It was quite amazing building such a useful app and I designed it vintage-like."
          link="https://fastidious-sunburst-aac406.netlify.app/"
          reverse={true}
        />
        <Project
          image={shoppingCart}
          title="Shopping Cart"
          description="Shopping Cart is one of the most important projects in my arsenal as I assume most real store projects need to include a shopping cart.
           And I think it was somehow challenging to build. I had to use Context as state manager and also used useReducer hooks. I found coding this project absolutely useful as a practice."
          link="https://sparkling-smakager-2a677f.netlify.app/products"
          reverse={false}
        />
        <Project
          image={form}
          title="Form with validation"
          description="Another impressive project that I enjoyed coding was this sign up/ login form with validation feature.
          I used react.js with SPA technology for building two different pages fot sign up and login. I used regex for email validation."
          link=""
          reverse={true}
        />
        <Project
          image={messenger}
          title="Messenger"
          description="I couldn't imagine that one day I can build a meesenger application on my own.
          I used chat engine package and firebase so you can sign in with your google account. 
          I should warn you if you're in Iran, you need some special sort of VPN to login. I believe it's possible to use it with your chrome vpn connected if you want to test it in your PC. "
          link="https://startling-mermaid-d50877.netlify.app/"
          reverse={false}
        />
        <Project
          image={reactWeather}
          title="weather app - react"
          description="This was the second weather application I built. The first one was built with vanilla javascript which you can see it down this work page.
          For this app I used react.js and I could actually feel the power of react library for producing more maintainable and organized code."
          link="https://affectionate-pasteur-41be67.netlify.app/"
          reverse={true}
        />
        <Project
          image={crypto}
          title="cryptocurrency board app"
          description="another cool app in my favorite projects category! I built it with react.js and used an API for showing real data of digital coins.
           It was not so hard or tricky. But I think it was so cool and a good practice."
          link="https://thriving-crepe-7bec56.netlify.app/"
          reverse={false}
        />
        <Project
          image={todo}
          title="To do app"
          description="This app is built with HTML, CSS and Javascript. For mainaining the
            task list after reloading the page, I used Local Storage to get the
            data back from users' own browser."
          link="https://vigilant-carson-b870f0.netlify.app/"
          reverse={true}
        />
        <Project
          image={weather}
          title="Weather app"
          description="For buildign this cool weather app, I used HTML, CSS, Javascript and Open Weather APIs. This weather app also shows forcast for next few days. I designed and built this app from scratch all by myself."
          link="https://zealous-dubinsky-7b3c23.netlify.app/"
          reverse={false}
        />
        <Project
          image={hangman}
          title="Hangman app"
          description="This cool simple game demanded more logic than it seems. If you are
            not familiar with this game here is a little description: there are
            some words that computer chooses randomly. Then it sets the hyphens
            according to the number of the chosen word's letters. Then you have
            6 trying chances to guess and figure out what the word is. The
            Hangman drawing completes as you make wrong guesses until you lose
            or win."
          link="https://vigorous-knuth-dd0192.netlify.app/"
          reverse={true}
        />
        <Project
          image={taylor}
          title="Taylor Swift Club"
          description="For the first cousre in Shecodes workshops, buiding a random web
            page was our sweet simple project. I had fun making my first project
            about a celebrity I admire the most. This page is built is only
            built by HTML and CSS. And I designed it all by myself. And I think
            it's eye-catching, isn't it?"
          link="https://www.shecodes.io/workshops/shecodes-basics-5fe05f16-50aa-4ded-b857-9670702bd1c4/projects/628766"
          reverse={false}
        />
      </div>
    </div>
  );
};

export default Projects;
