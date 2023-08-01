import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import { useState } from "react";

const Projects = () => {
  let arr = ["design", "development", "database"];
  let navigate = useNavigate();

  let [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    navigate(`${arr[count]}`);
  } // next navigate

  function handleClickBack() {
    setCount(count - 1);
    navigate(-1);
  }
  // previous navigate
  return (
    <Container className="my-5 text-center custom-container">
      <Heading heading="Pro" subhead="j" subheading="ects" />
      <Outlet />
      <div className="container-fluid m-5">
        {count ? (
          <button
            onClick={handleClickBack}
            className="btn btn-danger px-3 pt-2"
          >
            Back
          </button>
        ) : (
          <button
            onClick={handleClickBack}
            className="btn btn-danger disabled px-3 pt-2"
          >
            Back
          </button>
        )}
        {/* back button disabled when it is on projects page , {count = 0} */}
        {count === 3 ? (
          <button
            onClick={handleClick}
            className="btn btn-primary ms-5 px-3 pt-2 disabled"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="btn btn-primary ms-5 px-3 pt-2"
          >
            Next
          </button>
        )}
        {/* next button disabled when it is on last project , {count = 3 } */}
      </div>{" "}
    </Container>
  );
};
export default Projects;
