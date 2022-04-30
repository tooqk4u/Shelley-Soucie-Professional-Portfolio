import React from 'react'
import { Card } from 'react-bootstrap'

function Footer() {
    return (
        <Card className="footer">
        
        <Card.Body>
          <Card.Title>Tooqk4u, 2022 ®</Card.Title>
          <Card.Text>
            Graduate of the UCONN:
            Masters Degree of Physical Therapy - 
            Bachelors of Science with Minor in Physio-neuro Biology - 
            Software Engineering Bootcamp Intensive Program
            <br/>
            <a href="https://github.com/tooqk4u" target="_blank" rel="noreferrer">Github</a>
            {/* nonbreaking space */}
            &nbsp;
            <a href="https://www.linkedin.com/in/shelley-s-a6554310" target="_blank" rel="noreferrer">LinkedIn</a>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Footer