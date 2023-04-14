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
              description="Netflix! they have been performing some analyses, and they believe that the average duration of movies has been declining. So we take 10 years of data and verify it"
              ghLink="https://github.com/mdsarfraz2002/Data_analysis_netflix_project"
              demoLink="https://app.datacamp.com/workspace/w/2b28fd36-92da-4e87-9acd-20db7e19274c"
            />
          </Col>

          {/* <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/mdsarfraz2002/Data_analysis_netflix_project"
              demoLink="https://app.datacamp.com/workspace/w/2b28fd36-92da-4e87-9acd-20db7e19274c"
            />
          </Col>*/}

          {/* <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
