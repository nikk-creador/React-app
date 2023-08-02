import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
const Home = () => {
  return (
    <Container className="my-5 text-center custom-container">
      <div>
        <p
          className="lead"
          style={{ letterSpacing: "0.3rem", lineHeight: "3rem" }}
        >
          I love turning design ideas into real things,
          <span className="d-block">making imagination come to life.</span>
        </p>
      </div>
    </Container>
  );
};

export default Home;
