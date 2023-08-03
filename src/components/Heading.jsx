import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import { useEffect } from "react";

const Heading = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <h1 data-aos="flip-up" className="m-4 fw-light fs-1 text-uppercase">
      {props.heading}
      <span className="text-primary">{props.subhead}</span>
      {props.subheading}
    </h1>
  );
};

export default Heading;
