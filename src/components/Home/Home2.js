import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <span>
                I am a <span className="purple">Software Developer</span> with over 1 year of experience in building scalable tools, data pipelines, and AI-driven solutions.<br />
                <br />
                My journey includes developing impactful AI solutions and internal tools at <span className="purple">Krutrim</span> and <span className="purple">OLA</span>, where I designed robust pipelines and solved complex engineering problems.<br />
                <br />
                Recently, I have worked on building a Smart Router microservice to handle LLM request routing across multiple providers like <span className="purple">OpenAI, Groq, AWS Bedrock, and Anthropic</span> using intelligent fallback and load-balancing logic.<br />
                <br />
                I’ve also developed alerting and monitoring systems using <span className="purple">New Relic, PagerDuty, and Slack</span> to detect model failures, trigger escalations, and maintain high availability.<br />
                <br />
                Additionally, I built real-time voice transcription systems using WebSockets and <span className="purple">FastAPI</span>, integrated <span className="purple">GCP Custom Search API</span> as a fallback search mechanism, and optimized backend systems using <span className="purple">MongoDB, PostgreSQL JSON, and Kubernetes</span>.<br />
                <br />
                I secured third place in a national hackathon hosted by <span className="purple">IIT Kanpur</span>, demonstrating my problem-solving and quick prototyping capabilities.<br />
                <br />
                Passionate about innovation, I strive to create scalable and efficient solutions that drive meaningful impact.
              </span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mdsarfraz2002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mdsarfraz0202/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mdsarfraz2002/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/md._.sarfraz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
