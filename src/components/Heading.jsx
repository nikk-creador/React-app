import React from "react";
import "aos/dist/aos.css";
import "../App.css";

const Heading = (props) => {
  return (
    <h1
      data-aos="flip-up"
      data-aos-delay={140}
      data-aos-easing="linear"
      className="m-4 fw-normal text-uppercase"
    >
      {props.heading}
      <span className="text-primary">{props.subhead}</span>
      {props.subheading}
    </h1>
  );
};

export default Heading;
