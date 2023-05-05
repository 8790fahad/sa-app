import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Login from "./Login";
import Register from "./Register";
export default function Login_Register() {
  const [page, setPage] = useState(false);
  return (
    <div className="sign-in-body">
      <Row className="m-0">
        <Col md={4}></Col>
        <Col md={4} className="">
          <div className="switch_div">
            <div>
              <p
                className="login_register"
                style={{
                  borderBottom: "1px solid grey",
                  paddingBottom: 10,
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    borderBottom: page ? "" : `3px solid #6bbd8c`,
                    marginRight: 20,
                    paddingBottom: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => setPage(false)}
                >
                  Log in
                </span>
                <span
                  style={{
                    borderBottom: page ? `3px solid #6bbd8c` : "",
                    marginLeft: 20,
                    paddingBottom: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => setPage(true)}
                >
                  Register
                </span>
              </p>
            </div>
          </div>
          {!page ? <Login /> : <Register />}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
