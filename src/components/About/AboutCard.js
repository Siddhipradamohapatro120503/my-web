import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Siddhiprada Mohapatra</span> from <span className="purple">Odisha, India.</span>
      <br />
        I have hands-on experience in DevOps and cloud technology.
      <br />
        I am currently pursuing a B.Tech in Computer Science and Engineering at LPU Punjab.
     <br />
      <br />
      Apart from coding, here are some other activities that I love to do:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Playing Games
        </li>
        <li className="about-activity">
          <ImPointRight /> Writing Tech Blogs
        </li>
        <li className="about-activity">
          <ImPointRight /> Organizing Events
        </li>
        <li className="about-activity">
          <ImPointRight /> Traveling
        </li>
    </ul>


          <p style={{ color: "rgb(155 126 172)" }}>
            "DevOps is not just a methodology; it’s a journey to a better culture of collaboration and efficiency."{" "}
          </p>
          <footer className="blockquote-footer">Siddhiprada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
