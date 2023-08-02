import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router";
import { useState } from "react";

const Projects = () => {
  const projectList = {
    frontendbootcamp: {
      title: "Frontend Bootcamp",
      description:
        "A dynamic learning platform built with HTML, CSS,JavaScript, and Bootstrap, providing an immersive experience in front-end development.",
      img: "barber",
      demo: "https://development-bootcamp.netlify.app/",
      code: "https://github.com/nikk-creador/front-end-bootcamp",
    },
    plantdiseaseprediction: {
      title: "Plant Disease Prediction",
      description:
        "Build a CNN model,The system identifies plant diseases with accuracy of 97 percent. Also, developed aninterface using HTML, CSS, and JavaScript to allow users to easily interact with the system locally",
      demo: "https://www.dropbox.com/s/lyla2w0enko9ib7/plant%20disease%20prediction.mp4?dl=0",
      code: "https://www.dropbox.com/s/lyla2w0enko9ib7/plant%20disease%20prediction.mp4?dl=0",
    },
    hairstudio: {
      title: "Hair Studio",
      description:
        "I created a hair studio website using HTML, CSS, and JavaScript to showcase their services and expertise.The website has a user-friendly interface and effectively promotes the studio’s offerings",
      code: "https://github.com/nikk-creador/Hair-Studio-website",
      demo: "https://barbers-point.netlify.app/",
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
