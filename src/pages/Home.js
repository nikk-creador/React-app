import { Container } from "react-bootstrap";

import "aos/dist/aos.css";
import "../App.css";

const Home = () => {
  return (
    <Container className="my-5 text-center container custom-container">
      <div>
        <p
          data-aos="zoom-out"
          data-aos-delay="80"
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
