import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router";
import { useState } from "react";
import projectList from "../components/projectList.json";

const Projects = () => {
  const location = useLocation();
  const arr = Object.keys(projectList);
  const navigate = useNavigate();

  let [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    navigate(`${arr[count]}`);
  }
  // next navigate
  if (location.pathname === "/projects") {
    count = 0;
  }
  function handleClickBack() {
    setCount(count - 1);
    navigate(-1);
  } // previous navigate

  return (
    <Container className="my-5 text-center custom-container">
      <Heading heading="Pro" subhead="j" subheading="ects" />
      <Outlet />

      <div className="container-fluid m-5">
        {location.pathname === "/projects" ? (
          <button
            onClick={handleClickBack}
            className="btn btn-danger disabled px-4 pt-2"
          >
            Back
          </button>
        ) : (
          <button
            onClick={handleClickBack}
            className="btn btn-danger  px-4 pt-2"
          >
            Back
          </button>
        )}
        {/* back button disabled when it is on projects page , using location.pathname */}
        {count === arr.length ? (
          <button
            onClick={handleClick}
            className="btn btn-primary ms-5 px-4 pt-2 disabled"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="btn btn-primary ms-5 px-4 pt-2"
          >
            Next
          </button>
        )}
        {/* next button disabled when it is on last project, {count = arr.length } */}
      </div>
    </Container>
  );
};

export default Projects;
