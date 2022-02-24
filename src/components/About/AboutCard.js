import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-0"> */}
          <p style={{ textAlign: "justify" }}>
            I am a first year student pursuing my Master's degree in Computer Science at the New York University.
            <br />
            <br />
            Actively looking for Summer '22 internship opportunities.
            <br />
            <br />
            I am currently living in New York, US but I originally come from Pune, India.
            <br />
            <br />
            When I'm not coding I am :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        {/* </blockquote> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
