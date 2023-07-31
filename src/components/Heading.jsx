import React from "react";

const Heading = (props) => {
  return (
    <h1 className="m-4 fw-light fs-1 text-uppercase">
      {props.heading}
      <span className="text-primary">{props.subhead}</span>
      {props.subheading}
    </h1>
  );
};

export default Heading;
