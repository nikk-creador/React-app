import React from "react";
import "App.css";
const Login = () => {
  return (
    <div className="container custom-container my-5 ">
      <form>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;
