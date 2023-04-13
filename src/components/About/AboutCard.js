import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Md Sarfraz Alam </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />I am currently pursuing my bachelor's degree in computer science with specialization in<span className="purple"> Data Science</span> from Presidency University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Pc Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is always one more bug to fix."{" "}
          </p>
          <footer className="blockquote-footer">Ellen Ullman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
