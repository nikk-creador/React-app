import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const Contact = () => {
  return (
    <Container className="my-5 text-center  custom-container">
      <h1 className="lead fs-1 text-uppercase mb-5">
        Contact <span className="text-primary">Us</span>
      </h1>
      <div className="contact-info mt-1 d-flex align-items-start flex-column">
        <p className="fs-3  lead mb-3">For any inquiries, please contact us at:</p>
        <h6>
          <span className="fw-bold">Phone : </span>{" "}
          <a href="tel:+1234567890">+91 95456 96969</a>
        </h6>
        <h6>
          <span className="fw-bold">Email : </span>
          <a href="mailto:naitikb.tagline@gmail.com">
            naitikb.tagline@gmail.com
          </a>
        </h6>
      </div>
    </Container>
  );
};

export default Contact;
