import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oussama Samhani </span>
            from <span className="purple"> Oujda, Morocco.</span>
            <br />
            I am a final year Software Engineering student at ENSA Oujda.
            <br />
            I'm passionate about building full-stack applications with AI integration
            and exploring new technologies.
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading philosophy
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym workouts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building solutions that bridge technology and human needs!"{" "}
          </p>
          <footer className="blockquote-footer">Oussama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;