import React, { useState } from "react";
import "../styles.css";
import { Col, Row } from "reactstrap";
import Individual from "./Individual";
import Specialty from "./Specialty";
function Register() {
  const [page, setPage] = useState(false);

  return (
    <div className="auth_div">
      <Row className="m-0">
        <Col md={4}></Col>
        <Col md={4} className="p-4">
          <div className="text-center mb-4">
            <img
              src={require("../img/logo.png")}
              className="auth_icon"
              alt="logo"
            />
          </div>
          {/* <Card className="p-4 auth_card shadow"> */}
          <form className="">
            <h3 className="card_title text-center">Register As...</h3>
            <div className="switch_div" style={{ marginTop: 15 }}>
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
                    Individual
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
                    Specialty
                  </span>
                </p>
              </div>
            </div>
            {!page ? <Individual /> : <Specialty />}
          </form>
          {/* </Card> */}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default Register;
