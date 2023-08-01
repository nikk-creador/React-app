import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("user", "test");
    navigate("/");
  };

  return (
    <div className="my-5 text-center container custom-container login">
      <h2 className="lead fs-2">Welcome Back! </h2>
      <p className="lead fs-5">Please log in to continue</p>
      <button className="btn btn-primary" onClick={login}>
        {" "}
        Login
      </button>
    </div>
  );
};

export default Admin;
