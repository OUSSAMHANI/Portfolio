import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ouss.jpeg"; // Updated to use your photo
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
              I'm a passionate Software Engineering student focused on creating innovative 
              full-stack solutions that address real-world challenges through technology.
              <br />
              <br />
              I have hands-on experience with technologies like
              <i>
                <b className="purple"> React, Spring Boot, Django, </b>
              </i>
              and I'm exploring ways to integrate
              <i>
                <b className="purple"> AI capabilities </b>
              </i>
              into practical applications.
              <br />
              <br />
              My current focus is on developing my skills in &nbsp;
              <i>
                <b className="purple">Full-Stack Development </b> while
                learning best practices in {" "}
                <b className="purple">
                  DevOps and AI Integration.
                </b>
              </i>
              <br />
              <br />
              I enjoy building applications that combine robust backends with 
              <b className="purple"> Spring Boot & Django</b>, interactive 
              frontends with
              <i>
                <b className="purple"> React</b>
              </i>
              , and innovative features powered by <b className="purple">AI solutions</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Oussama Samhani" style={{ borderRadius: '50%', maxWidth: '300px' }} />
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
                  href="https://github.com/OUSSAMHANI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oussama-samhani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/oussama_samhani/"
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