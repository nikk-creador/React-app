import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <Container className="my-5 text-center  custom-container">
      <Heading heading="contact " subhead="me" />
      <div className="m-4">
        <div className="contact-info mt-1 d-flex align-items-start flex-column">
          <p className="fs-3  lead mb-3">
            For any inquiries, please contact us at:
          </p>
          <p className="mb-3">
            Phone : <a href="tel:+1234567890">+91 95456 96969</a>
          </p>
          <p>
            Email :{" "}
            <a href="mailto:naitikb.tagline@gmail.com">
              naitikb.tagline@gmail.com
            </a>
          </p>
        </div>
        <div className="icon custom-letter-spacing custom-line-height lead pt-5 d-flex align-items-center justify-content-center">
          <div className="social-hover pe-3 fs-3">
            <a href="https://www.instagram.com/naitik_bhavsar17/?igshid=ZDdkNTZiNTM%3D">
              <i className="bi bi-instagram text-custom "></i>
            </a>
          </div>
          <div className="social-hover pe-3 fs-3">
            <a href="https://www.instagram.com/">
              <i className="bi bi-facebook text-primary "></i>
            </a>
          </div>
          <div className="social-hover pe-3 fs-3">
            <a href="https://github.com/nikk-creador">
              <i className="bi bi-github text-dark"></i>
            </a>
          </div>
          <div className="social-hover pe-3 fs-3">
            <a href="https://www.linkedin.com/in/naitik-bhavsar-b385051b0/">
              <i className="bi bi-linkedin text-primary"></i>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
