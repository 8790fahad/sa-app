import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
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
  );
};

export default Login;
