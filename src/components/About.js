import React from 'react'
import { Card } from 'react-bootstrap'
import profilepic from "../assets/images/danielle.PNG";


function About() {
    return (
        <Card className='shelley' id="aboutMe">
            <Card.Header >
                <large className="text-muted">Full Stack Software Engineer</large>
            </Card.Header>
            <Card.Img variant="top" src={ profilepic }  rel="Shelley" alt="Shelley" />
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Hi, my name is Shelley Soucie. I have been working as a Physical Therapist for several years. As a Physical Therapist I have consistently worked with applications for clinical documentation. It was my frustration with the inadequacies of these applications that piqued my interest in computer programming. Upon further research I realized I had a deep interest in learning about web development. I have recently graduated from UCONN Coding Bootcamp for Web development.
                </Card.Text>
            </Card.Body>
           </Card>
        
        
    )
}

export default About;