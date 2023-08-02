import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className=" container text-center">
      <div class="jumping-dots-loader">
        {" "}
        <span></span> <span></span> <span></span>{" "}
      </div>
      <div class="moving-gradient"></div>
    </div>
  );
};

export default Loader;
