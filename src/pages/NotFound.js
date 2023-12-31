import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <div className="custom-container container my-5 p-5 bg-light">
      <h1> :( </h1>
      <br />
      <h3>
        A 404 error occured, Page not found, check the Path{" "}
        <span className="text-danger"> {location.pathname} </span> and try
        again.
      </h3>
      <br />
      <button onClick={handleClick} className="btn btn-danger px-3 pt-2 ">
        Home
      </button>
    </div>
  );
};

export default NotFound;
