import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Three from "../../Assets/Projects/Three.png";
import Twillo from "../../Assets/Projects/twillo.png";
import emotion from "../../Assets/Projects/emotion.png";
import Linkedin from "../../Assets/Projects/Linkedin.png";
import Selenify from "../../Assets/Projects/Selenify.png";
import grpc from "../../Assets/Projects/grpc.png";


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
              imgPath={Selenify}
              isBlog={false}
              title="Selenify"
              description="Developed Selenify, a legal app, using Google Cloud, Node.js, React, and Nginx, integrating the Google Gemini API for advanced legal searches to enhance user experience. Deployed a scalable infrastructure on Google Cloud to ensure smooth and reliable app performance. Conducted thorough testing with Postman and Firebase, resulting in a robust and reliable application. The app received positive user feedback for its user-friendly interface and accurate legal information."
              ghLink="https://github.com/snigyban18/Google-Solution-Challenge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Linkedin}
              isBlog={false}
              title="30 days Automation Linkdlen Posts"
              description="Developed a 30-day LinkedIn post automation project using Python and Selenium, integrating AI technologies such as OpenAI GPT and OpenAI DALL·E 2 for content generation. Collaborated efficiently using Git and GitHub for project management, ensuring seamless teamwork and version control."
              ghLink="https://github.com/Siddhipradamohapatro120503/Devops-Hackthon-Lpu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Twillo}
              isBlog={false}
              title="Verification app using One time password (OTP)"
              description="In today's fast-paced tech landscape, Twilio is a game-changer, empowering developers to seamlessly integrate messaging, voice, and video functionalities into their projects. This guide is your go-to resource for harnessing Twilio's power, from setting up your account and obtaining phone numbers to sending SMS, making voice calls, and adding video communication. With step-by-step instructions and code snippets, it's your ticket to unlocking the full potential of Twilio in your projects."
              ghLink="https://github.com/Siddhipradamohapatro120503/go-twilio-verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Three}
              isBlog={false}
              title="Three tire Application"
              description="Applying for the three-tier application development role, I bring a robust background in creating scalable and efficient software architectures. My experience encompasses designing and implementing client-side interfaces, developing server-side logic, and managing databases. I have successfully executed projects using technologies like Angular, Node.js, and PostgreSQL, ensuring seamless interaction between the presentation, logic, and data layers. My focus on maintaining clean code and optimizing performance, along with a keen eye for detail and a passion for problem-solving, equips me to contribute effectively to your team and drive innovative solutions."
              ghLink="https://github.com/Siddhipradamohapatro120503/TWSThreeTierAppChallenge"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grpc}
              isBlog={false}
              title="Appliaction using gRPC"
              description="gRPC is very popular in service to service calls, as often HTTP calls are harder to understand at first glance. gRPC functions are much easier to reason about, so developers don't have to worry about writing a lot of documentation because the code itself should explain everything. Some of the services might also be written in different languages and gRPC comes with multiple libraries to support that."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Traffic Detection system"
              description="Developed an AI tracking system utilizing the YOLO model for object detection. This system efficiently identifies and tracks multiple objects in real-time, demonstrating high accuracy and speed in various environments."
              ghLink="https://github.com/Siddhipradamohapatro120503/AI-in-Traffic-Predication-"
              demoLink="https://twitter.com/mohapatro_Sid3/status/1654021466722119681"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
