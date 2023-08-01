import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { useLocation, Outlet } from "react-router";
const Projects = () => {
  let location = useLocation();

  let navigate = useNavigate();

  console.log(location, "path name");
  let arr = ["design", "development", "database"];

  function handleClick() {
    navigate(`${location.pathname}/${arr[0]}`);
  } // next navigate

  function handleClickBack() {
    navigate(1);
  } // previous navigate
  return (
    <Container className="my-5 text-center custom-container">
      <Heading heading="Pro" subhead="j" subheading="ects" />
      <Outlet />
      <div className="container-fluid m-5">
        <button onClick={handleClickBack} className="btn btn-danger">
          Previous
        </button>
        <span> </span>
        <button onClick={handleClick} className="btn btn-primary">
          Next
        </button>
      </div>
    </Container>
  );
};
export default Projects;
