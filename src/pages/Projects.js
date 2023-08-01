import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import { useState } from "react";

const Projects = () => {
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let arr = ["design", "development", "database"];
  let arrLength = arr.length - 1;
  function handleClick() {
    setCount(count + 1);
    navigate(`${arr[count]}`);
    if (count > arrLength) {
      navigate("/projects");
      setCount(count - arr.length);
    }
  } // next navigate

  function handleClickBack() {
    if (count > arrLength) {
      setCount(count - arrLength);
    } else {
      setCount(count - 1);
    }
    navigate(-1);
  } // previous navigate

  return (
    <Container className="my-5 text-center custom-container">
      <Heading heading="Pro" subhead="j" subheading="ects" />
      <Outlet />
      <div className="container-fluid m-5">
        <button onClick={handleClickBack} className="btn btn-danger">
          Back
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
