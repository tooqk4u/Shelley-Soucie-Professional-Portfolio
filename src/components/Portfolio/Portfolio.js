import React from "react";
import Container from "react-bootstrap/Container";
import Project from "../Project/Project";
// renders portfolio
function Portfolio() {
  // an array of project info that will be mapped and passed to project
  const projects = [
    {
      title: "Mountain Lake Bed & Breakfast",
      details:
        "A bed and breafast hotel site where you can book a room, view the cost, and make changes as needed.It utilizes a MySQL database and Handlebars templating engine. Built with Node, MySQL, Sequelize, Express, HTML, CSS, JavaScript and deployed to Heroku.",
      highlights: "Node MySQL Materialize",
      pLink: "https://mountainlake.herokuapp.com/",
      rLink: "https://github.com/tooqk4u/Mountain-Lake-Bed-and-Breakfast",
    },
    {
      title: "Soccer Standings & News",
      details:
        "A website that allows the soccer superfan to look up team standings, watch highlights of games on the app widget and to keep updated on all current news regarding their favorite team. It utilizes API calls, local storage, and DOM manipulation. Built with HTML, CSS, JavaScript, and jQuery using API's.",
      highlights: "Javascript jQuery",
      pLink: "https://ryanweiler92.github.io/Soccer-Standings-News/",
      rLink: "https://github.com/ryanweiler92/Soccer-Standings-News",
    },
    {
      title: "Weather Dashboard",
      details:
        "A website that allows a user to input a city to receive todays forecast and the 5 day forecast.Built with HTML, CSS, JavaScript, and jQuery using API's.",
      highlights: "JavaScript jQuery Bootstrap",
      pLink: "https://tooqk4u.github.io/Weather-Dashboard/",
      rLink: "https://github.com/tooqk4u/Weather-Dashboard",
    },
    {
      title: "The Tech Blog",
      details:
        "A full-stack CMS app for posting articles and opinions about tech related news. Utilizes MVC structure, node, Express, MySQL and Sequelize. Deployed to Heroku.",
      highlights: "Express MySQL Sequelize",
      pLink: "https://sleepy-island-29561.herokuapp.com/",
      rLink: "https://github.com/tooqk4u/Tech-Blog",
    },

    {
      title: "Password Generator",
      details: "This was the first coding project I have ever done. It utilizes windows alerts to prompt a user to pick a password length. Afterwards the user is then prompted to choose from 4 different components for a password. Once the user chooses the combination of components they would like in a password, a password is generated containing those components",
      highlights: "HTML, CSS, JavaScript",
      pLink: "https://tooqk4u.github.io/Password-Generator/",
      rLink: "https://github.com/tooqk4u/Password-Generator",
    },
    {
      title: "JavaScript Quiz",
      details: "This is a quiz about JavaScript that utilizes a countdown clock as a scoring mechanism. The user is prompted to start the quiz which in turn triggers the countdown clock. The use is then presented with a series of multiple choise answers to each question. If the user chooses the correct answer the next question is presented. If the user chooses a wrong answer ten seconds are deducted from the clock.At the end of the quiz the user can then enter their initials to redord their score in local storage.",
      highlights: "HTML, JavaScript, CSS",
      pLink: "https://tooqk4u.github.io/JavaScript-Quiz/",
      rLink: "https://github.com/tooqk4u/JavaScript-Quiz",
    },
    {
      title: "Husky HangOut",
      details:
        "Husk HangOut is a meet up app exclusive for UCONN students. It offers a one stop location for all happenings on and around campus. Look up parties, sports and craft events with more categories to be added. Once you sign up you can add an RSVP to an event, create an event or delete your RSVP to an event Utilizes Node, REACT, MongDB, Express",
      highlights: "MongoDB, GraphQL, MERN",
      pLink: "https://github.com/tooqk4u/husky-hangout",
      rLink: "https://husky-hangout.herokuapp.com/",
    },
  ];
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Portfolio</h3>
        </div>
      </div>
      <p className="portfolio-text">
        Check out some of my projects below. If you would like to see the repo
        for my portfolio site,{" "}
        <a
          href="https://github.com/tooqk4u/Professional-React-Portfolio"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          click here
        </a>
        .
      </p>
      <Container className="d-flex flex-wrap mt-5">
        {projects.map((project, i) => (
          <Project project={project} i={i} key={i} />
        ))}
      </Container>
    </section>
  );
}

export default Portfolio;
