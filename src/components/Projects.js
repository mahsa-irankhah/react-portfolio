import React from "react";
import Project from "./Project";

//images
import todo from "../images/todo-app.jpg";
import weather from "../images/weather-app.jpg";
import hangman from "../images/hangman.jpg";
import taylor from "../images/taylorswift.png";

const Projects = () => {
  return (
    <div>
      <div>
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
          image={weather}
          title="Weather app"
          description="For buildign this cool weather app, I used HTML, CSS, Javascript and Open Weather APIs. This weather app also shows forcast for next few days. I designed and built this app from scratch all by myself."
          link="https://zealous-dubinsky-7b3c23.netlify.app/"
          reverse={true}
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
          reverse={false}
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
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Projects;
