import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import "../styles.css";
// import img from "./img/logo.png";
import { useNavigate } from "react-router-dom";
import {  Col, Row } from "reactstrap";
function Register() {
  const navigate = useNavigate();
  return (
    <div className="auth_div mt-2">
      <Row className="m-0">
        <Col md={4}></Col>
        <Col md={4} className="p-4">
        <div className="text-center mb-4">
            <img src={require("../img/logo.png")} className="auth_icon" alt='logo'/>
          </div>
          {/* <Card className="p-4 auth_card shadow"> */}
          <form className="">
            <h3 className="card_title text-center">Register Here</h3>
            <div>
              <label className="label">Full Name</label>
              <div>
                <input
                  type="email"
                  className="input_field"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
            <div>
              <label className="label">Phone</label>
              <div>
                <input
                  type="email"
                  className="input_field"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
            <div>
              <label className="label">Email address</label>
              <div>
                <input
                  type="email"
                  className="input_field"
                  id="exampleInputEmail1"
                />
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
                onClick={() => navigate("/feed")}
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
                Already have an account? | <span   onClick={() => navigate("/login")}>Login here</span>
              </p>
            </div>
          </form>
          {/* </Card> */}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default Register;
