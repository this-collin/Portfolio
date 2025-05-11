import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Collin Smith </span>
            from <span className="purple"> Smithville, Tennessee.</span>
            <br />
            I'm a full stack Software Engineer with 2 years of professional experience.
            <br />
            I'm a graduate of CookSystems FastTrack program, and Nashville Software School's Web Development bootcamp.
            <br />
            <br />
            Outside of coding, here's some things I spend my time doing: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Sim Racing
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about space
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying nature
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you want to be the best, you have to outwork the rest..."{" "}
          </p>
          <footer className="blockquote-footer">Collin Smith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
