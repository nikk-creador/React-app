import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../components/Heading";
import "../App.css";
import profile from "../img/animation.gif";
const About = () => {
  return (
    <Container
      style={{ background: "white" }}
      className="my-5 text-center  custom-container "
    >
      <Row>
        <Col className="mb-4 text-center">
          <Heading heading="About " subhead="me" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center mb-5">
          <img
            style={{ maxWidth: "70%" }}
            src={profile}
            className="img img-fluid"
            alt="My profile pic"
          />
        </Col>
        <Col md>
          <Row>
            <Col>
              <h2 className="lead fs-1">Front-End Developer</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                className="p-5 align-items-start "
                style={{
                  letterSpacing: "0.1rem",
                  lineHeight: "2rem",
                }}
              >
                I'm{" "}
                <h3 className="fw-bold" style={{ fontFamily: "Bungee Shade" }}>
                  Naitik Bhavsar
                </h3>{" "}
                passionate about cutting-edge technologies and creating visually
                stunning interfaces. I believe in the power of exceptional user
                experiences and I strive to make every interface I create both
                beautiful and intuitive. I'm always up for a challenge and eager
                to push the boundaries of what's possible.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <button
                variant="outline-secondary"
                className="btn btn-outline-secondary p-3 mb-5"
              >
                <a
                  href="upload pdf here"
                  download=""
                  className="text-dark nav-link"
                >
                  Download Resume
                </a>
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
