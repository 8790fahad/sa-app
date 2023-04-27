import React from "react";
import "./styles.css";
import img from "./img/logo.png";
const Login = () => {
  return (
    <div className=" container">
      <img src={img} alt="logo" className="m-4 img" />
      <div className="mtt">
        <h2 className="mt-4 mb-2">Welcome back</h2>
        <form className="_container">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <hr />
          <button type="button" className="btn btn-outline-primary">
            Login with Facebook
          </button>
          <button type="button" className="btn btn-outline-danger">
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
