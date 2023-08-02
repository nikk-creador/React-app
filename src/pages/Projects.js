import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router";
import { useState } from "react";

const Projects = () => {
  const projectList = {
    project1: {
      title: "Project 1",
      description:
        "Elevate your online game with our web design service. We'll take your website from meh to magnificent in no time!",
    },
    project2: {
      title: "Project 2",
      description:
        "From web and mobile app development to custom software, we bring your vision to life. Trusted technology partners for success.",
    },
    project3: {
      title: "Project 3",
      description:
        "Unlock the full potential of your data with our SQL service. From complex queries to seamless integrations, we've got you covered",
    },
  };

  const location = useLocation();
  const arr = Object.keys(projectList);
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    navigate(`${arr[count]}`);
  } // next navigate

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
            className="btn btn-danger disabled px-3 pt-2"
          >
            Back
          </button>
        ) : (
          <button
            onClick={handleClickBack}
            className="btn btn-danger  px-3 pt-2"
          >
            Back
          </button>
        )}
        {/* back button disabled when it is on projects page , using location.pathname */}
        {count === arr.length ? (
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
        {/* next button disabled when it is on last project, {count = arr.length - 1} */}
      </div>
    </Container>
  );
};

export default Projects;

// https://github.com/nikk-creador/Portfolio-website
