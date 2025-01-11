import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiGit,
  SiVisualstudiocode,
  SiFirebase,
  SiVercel,
  SiDocker,
  SiGithub,
  SiPostman,
  SiJira,
  SiNewrelic,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiGit />, name: "Git" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiNewrelic />, name: "New Relic" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
