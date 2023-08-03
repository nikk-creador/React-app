import React from "react";
import "aos/dist/aos.css";
import "../App.css";

const Heading = (props) => {
  return (
    <h1
      data-aos="flip-up"
      data-aos-delay={120}
      data-aos-easing="linear"
      className="m-4 fw-light fs-1 text-uppercase"
    >
      {props.heading}
      <span className="text-primary">{props.subhead}</span>
      {props.subheading}
    </h1>
  );
};

export default Heading;
