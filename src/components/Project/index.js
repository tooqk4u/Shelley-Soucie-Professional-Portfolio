import React from "react";
import { Card } from "react-bootstrap";
import password from "../assets/images/Password.PNG";
import hotel from "../assets/images/tempsnip.png";
import soccer from "../assets/images/Standings3.png";
import weather from "../assets/images/weatherDashboard.PNG";
import quiz from "../assets/images/JavaScript-Quiz.PNG";
import workday from "../assets/images/workday.PNG";
import blog from "../assets/images/tech-blog.PNG";
import runbuddy from "../assets/images/runbuddy.png";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Projects() {
  return (
    
      
      <div className="projects" id="projects">
        <br></br>
        <div><CardHeader className="project-header">PROJECTS</CardHeader>
        <>
          <Card className="cardProject">
            <Card.Img variant="top" src={hotel} />
            <Card.Body>
              <Card.Text>
                <a href="mountainlake.herokuapp.com/" target="_blank" rel="noreferrer">
                  Mountain Lake Bed & Breakfast
                </a>

                <p>
                  A bed and breafast hotel site where you can book a room, view
                  the cost, and make changes as needed
                </p>

                <a href="https://github.com/tooqk4u/Mountain-Lake-Bed-and-Breakfast">
                  Github: Mountain Lake Bed & Breakfast
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProject">
            <Card.Img variant="top" src={runbuddy} />
            <Card.Body>
              <Card.Text>
                <a href=" https://tooqk4u.github.io/Run-Buddy/" target="_blank" rel="noreferrer">
                  Run Buddy
                </a>

                <p>A website that offers fitness training services.</p>

                <a href="https://github.com/tooqk4u/Run-Buddy">
                  Github: Run Buddy
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProject">
            <Card.Img variant="top" src={blog} />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://sleepy-island-29561.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tech Blog
                </a>
                <p>
                  A website to blog about all things tech related for the full
                  stack developer.
                </p>

                <a href="https://github.com/tooqk4u/Tech-Blog">
                  Github: Tech Blog
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProject">
            <Card.Img variant="top" src={soccer} />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://ryanweiler92.github.io/Soccer-Standings-News/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Soccer Standings News
                </a>
                <p>
                  A website that allows the soccer superfan to look up team
                  standings, watch highlights of games on the app widget and to
                  keep updated on all current news regarding their favorite team{" "}
                </p>

                <a href="https://github.com/ryanweiler92/Soccer-Standings-News">
                  Github: Soccer Standings News
                </a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="cardProject">
            <Card.Img variant="top" src={weather} />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://tooqk4u.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather Dashboard
                </a>

                <p>
                  A website that allows a user to input a city to receive todays
                  forecast and the 5 day forecast.
                </p>
                <a href="https://github.com/tooqk4u/Weather-Dashboard">
                  Github: Weather Dashboard
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProject">
            <Card.Img variant="top" src={workday} />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://github.com/tooqk4u/Work-Day-Scheduler"
                  target="_blank"
                  rel="noreferrer"
                >
                  Work Day Scheduler
                </a>

                <p>A website for a user to utilize for their daily schedule </p>
                <a href="https://github.com/tooqk4u/Work-Day-Scheduler">
                  Github: Work Day Scheduler
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProject">
            <Card.Img variant="top" src={quiz} />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://tooqk4u.github.io/JavaScript-Quiz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JavaScript Quiz
                </a>

                <p>A website that administers a timed quiz about javascript </p>

                <a href="https://github.com/tooqk4u/JavaScript-Quiz">
                  Github: JavaScript Quiz
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProject">
            <Card.Img variant="top" src={password} />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://tooqk4u.github.io/Password-Generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Password Generator
                </a>

                <p>A website that randomly generates a password </p>

                <a href="https://github.com/tooqk4u/Password-Generator">
                  Github: Password Generator
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
        </div>
      </div>
    
  );
}

export default Projects;
