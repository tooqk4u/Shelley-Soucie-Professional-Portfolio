import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from '../Project/Project'
// renders portfolio
function Portfolio() {
  // an array of project info that will be mapped and passed to project
    const projects = [
        {
            title: "Mountain Lake Bed & Breakfast",
            details: "A bed and breafast hotel site where you can book a room, view the cost, and make changes as needed.It utilizes a MySQL database and Handlebars templating engine. Built with Node, MySQL, Sequelize, Express, HTML, CSS, JavaScript and deployed to Heroku.",
            highlights: "Node MySQL Materialize",
            pLink: "https://mountainlake.herokuapp.com/",
            rLink: "https://github.com/tooqk4u/Mountain-Lake-Bed-and-Breakfast"
        },
        {
            title: "Soccer Standings & News",
            details: "A website that allows the soccer superfan to look up team standings, watch highlights of games on the app widget and to keep updated on all current news regarding their favorite team. It utilizes API calls, local storage, and DOM manipulation. Built with HTML, CSS, JavaScript, and jQuery using API's.",
            highlights: "Javascript jQuery",
            pLink: "https://ryanweiler92.github.io/Soccer-Standings-News/",
            rLink: "https://github.com/ryanweiler92/Soccer-Standings-News"
        },
        {
            title: "Weather Dashboard",
            details: "A website that allows a user to input a city to receive todays forecast and the 5 day forecast.Built with HTML, CSS, JavaScript, and jQuery using API's.",
            highlights: "JavaScript jQuery Bootstrap",
            pLink: "https://tooqk4u.github.io/Weather-Dashboard/",
            rLink: "https://github.com/tooqk4u/Weather-Dashboard"
        },
        {
            title: "The Tech Blog",
            details: "A full-stack CMS app for posting articles and opinions about tech related news. Utilizes MVC structure, node, Express, MySQL and Sequelize. Deployed to Heroku.",
            highlights: "Express MySQL Sequelize",
            pLink: "https://sleepy-island-29561.herokuapp.com/",
            rLink: "https://github.com/tooqk4u/Tech-Blog"
        },
        {
            title: "Employee Tracker",
            details: "Employee Tracker is a command line app that interacts with a MySQL database to so that you can easily keep track your company's departments, roles, and employees. Utilizes node, MySQL, inquirer.js.",
            highlights: "MySQL Node Inquirer",
            pLink: "https://drive.google.com/file/d/16uN31aRwsMttfUDWhgveZG_Y4xO139bm/view",
            rLink: "https://github.com/tooqk4u/Employee-Tracker"
        },
        {
          title: "JavaScript Quiz",
          details:  "JavaScript Quiz",
          highlights: "HTML, CSS, JavaScript",
          pLink: "https://tooqk4u.github.io/JavaScript-Quiz/",
          rLink: "https://github.com/tooqk4u/JavaScript-Quiz"
        },
        {
          title: "Password Generator",
          details:  "JavaScript Quiz",
          highlights: "HTML, CSS, JavaScript",
          pLink: "https://tooqk4u.github.io/Password-Generator/",
          rLink: "https://github.com/tooqk4u/Password-Generator"
        },
        {
          title: "RunBuddy",
          details:  "Run Buddy",
          highlights: "HTML, CSS, JavaScript",
          pLink: "https://tooqk4u.github.io/Password-Generator/",
          rLink: "https://github.com/tooqk4u/Password-Generator"
        },
    ]
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Portfolio</h3>
        </div>
      </div>
        <p className="portfolio-text">Check out some of my projects below. If you would like to see the repo for my portfolio site, <a href="https://github.com/tooqk4u/Professional-React-Portfolio" target="_blank"
                    rel="nofollow noopener noreferrer">click here</a>.</p>
        <Container className="d-flex flex-wrap mt-5">
        {projects.map((project, i) => ( 
          <Project 
            project={project} 
            i={i}
            key={i}
            />
        ))}
            
        </Container>
    </section>
  );
}

export default Portfolio;