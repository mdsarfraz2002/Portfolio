import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="VikBot"
              description="University Chat Bot using NLP techniques which would answer general queries about the presidency university asked by the students and parents"
              ghLink="https://github.com/mdsarfraz2002/University-Chat-Bot"
              demoLink="https://drive.google.com/file/d/1_HqjYEGAYbpxoFElISh5m_zSSLGhGxZg/view?usp=sharing/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kitchen Night"
              description="Hotel reservation website with login credentials using HTML for frontend, CSS for styling & PHP for Database. Hosted on free hosting site 000webhostapp"
              ghLink="https://github.com/mdsarfraz2002/Hotel-Reservation/"
              demoLink="https://miniprojecthotel.000webhostapp.com/"
            />
          </Col>

           <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Investigating Netflix Movie"
              description="Netflix! they have been performing some analysis, and they believe that the average duration of movies has been declining. So we take 10 years of data and verify it"
              ghLink="https://github.com/mdsarfraz2002/Data_analysis_netflix_project"
              demoLink="https://app.datacamp.com/workspace/w/2b28fd36-92da-4e87-9acd-20db7e19274c"
            />
          </Col>

           <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tensorflow"
              description="utilizing TensorFlow's powerful Fashion Library to explore the latest trends and styles in the fashion industry. Leveraging the capabilities of machine learning"
              ghLink="https://github.com/mdsarfraz2002/Ai_ml_projects"
              demoLink="https://colab.research.google.com/github/mdsarfraz2002/Ai_ml_projects/blob/main/computer_vision_AIML.ipynb"
            />
          </Col>

        <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Temperature & Humidity Forecast On Live Data"
              description="Using arduino DHT-11 sensor to capture live temperature and humidity and using the live data to perform Data analysis using python"
              ghLink="https://github.com/mdsarfraz2002/Live-temperature-forecast"
              demoLink="https://github.com/mdsarfraz2002/Live-temperature-forecast/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
