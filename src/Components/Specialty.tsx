import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Specialty() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <label className="label">ID</label>
        <div>
          <input type="email" className="input_field" id="exampleInputEmail1" />
        </div>
      </div>
      <div>
        <label className="label">Username</label>
        <div>
          <input type="email" className="input_field" id="exampleInputEmail1" />
        </div>
      </div>
      <div>
        <label className="label">Phone</label>
        <div>
          <input type="email" className="input_field" id="exampleInputEmail1" />
        </div>
      </div>
      <div>
        <label className="label">Email address</label>
        <div>
          <input type="email" className="input_field" id="exampleInputEmail1" />
        </div>
      </div>
      <div>
        <label className="label mt-2" htmlFor="password">
          Password
        </label>
        <div>
          <input type="password" className="input_field" id="password" />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="auth_btn mt-3 mb-3"
          onClick={() => navigate("/welcome")}
        >
          Register
        </button>
      </div>

      <div className="text-center">
        <p className="auth_mssg login_with">Or</p>
      </div>
      <hr className="m-0 line" />
      <div className="auth_icon_group mb-3">
        <button className="auth_icon_div">
          <BsGoogle size="1.5rem" /> Continue with Google
        </button>
        <button className="auth_icon_div mt-3" onClick={() => {}}>
          <BsFacebook size="1.5rem" /> Continue With Facebook
        </button>
      </div>
      <div className="text-center">
        <p className="auth_mssg">
          Already have an account? |{" "}
          <span onClick={() => navigate("/login")}>Login here</span>
        </p>
      </div>
    </div>
  );
}
