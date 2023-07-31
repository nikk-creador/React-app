import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(history);
  console.log(location);
  return (
    <div className="container my-5  bg-light">
      <div className="container p-5">
        <h1> :( </h1>
        <br />
        <h2>
          A 404 error occured, Page not found, check the Path{" "}
          <span className="text-danger"> {location.pathname}</span> and try
          again.
        </h2>
        <br />
        <button
          onClick={() => history.push("/")}
          className="btn fs-4 px-4 py-2 btn-danger"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
