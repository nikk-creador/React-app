import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import { useState } from "react";

const Projects = () => {
  const arr = ["project1", "project2", "project3"];
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  function handleClick() {
    if (count < arr.length - 1) {
      setCount(count + 1);
      navigate(`/projects/${arr[count + 1]}`);
    } 
  }

  function handleClickBack() {
    if (count > 0) {
      setCount(count - 1);
      navigate(`/projects/${arr[count - 1]}`);
    }
  }

  return (
    <Container className="my-5 text-center custom-container">
      <Heading heading="Pro" subhead="j" subheading="ects" />
      <Outlet />
      <div className="container-fluid m-5">
        {count ? (
          <button onClick={handleClickBack} className="btn btn-danger px-3 pt-2">
            Back
          </button>
        ) : (
          <button onClick={handleClickBack} className="btn btn-danger disabled px-3 pt-2">
            Back
          </button>
        )}
        {/* back button disabled when it is on projects page , {count = 0} */}
        {count === arr.length - 1 ? (
          <button onClick={handleClick} className="btn btn-primary ms-5 px-3 pt-2 disabled">
            Next
          </button>
        ) : (
          <button onClick={handleClick} className="btn btn-primary ms-5 px-3 pt-2">
            Next
          </button>
        )}
        {/* next button disabled when it is on last project, {count = arr.length - 1} */}
      </div>
    </Container>
  );
};

export default Projects;


// https://github.com/nikk-creador/Portfolio-website