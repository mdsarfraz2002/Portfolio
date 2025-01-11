import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Md Sarfraz Alam</span>, <span className="purple">23 </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br/>
            <br/>
            <p style={{ color: "rgb(155 126 172)" }}>
            "There is always one more bug to fix."{" "}
          </p>
          <footer className="blockquote-footer">Ellen Ullman</footer>
            <br />
            Apart from coding, some other activities that I <span className="purple">love to do!</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Solo Travel
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
