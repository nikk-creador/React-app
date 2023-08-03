import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="my-5 text-center custom-container">
      <div>
        <p
          data-aos="flip-up"
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
