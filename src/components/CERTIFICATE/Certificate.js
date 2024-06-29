import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCard";
import Particle from "../Particle";
import Oracle from "../../Assets/CERTIFICATE/Oracle.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few Certifaction I have done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Oracle}
              isBlog={false}
              title="Oracle Cloud Infrastructure 2023 Certified Foundations Associate"
              description="The Oracle Cloud Infrastructure (OCI) Foundations certification is for individuals who intend to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure (OCI). This certification is for candidates with non-technical backgrounds, such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core OCI services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other OCI certifications"
              ghLink="https://catalog-education.oracle.com/pls/certview/sharebadge?id=FDED8D13C1AAEC38C9F0EE1274649473C5FD6A85B7E77BBC6F31383697E80BA3"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Linkedin}
              isBlog={false}
              title="Postman API Fundamentals Student Expert"
              description="What APIs are and their importance in modern software development. How to use Postman to work with APIs. Making GET, POST, PATCH, and DELETE requests. Query parameters, bodies, headers, response codes. Basic scripting"
              ghLink="https://badgr.com/public/assertions/YRgxBqXVSb-rMpUoMdZ_Iw"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
