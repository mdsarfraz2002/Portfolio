import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DiJavascript1, DiJava, DiPython, DiMysql, DiNodejsSmall } from "react-icons/di";
import {
  SiMongodb,
  SiApachekafka,
  SiApachespark,
  SiAnsible,
  SiReact,
  SiFlask,
  SiAmazonaws,
  SiNextdotjs,
  SiDjango,
} from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiMysql />, name: "SQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiApachespark />, name: "Apache Spark" },
    { icon: <SiApachekafka />, name: "Apache Kafka" },
    { icon: <SiAnsible />, name: "Ansible" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiDjango />, name: "Django" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{skill.name}</Tooltip>}
          >
            <div>{skill.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
