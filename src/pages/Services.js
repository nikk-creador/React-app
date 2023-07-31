import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../App.css";
import Heading from "../components/Heading";
const Services = () => {
  return (
    <Container className="my-5 text-center custom-container">
      <Heading heading="serv" subhead="i" subheading="ces" />
      <Outlet />
    </Container>
  );
};
export default Services;
