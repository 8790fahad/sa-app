import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Col, Modal, Row } from "reactstrap";

export default function Navbar() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  return (
    <>
      <Row className="navbar_ m-0 p-0 shadow-sm" style={{}}>
        <Col md={6} sm={6} xs={6} className="left_col_nav p-0">
          <img
            src={require("../img/logo.png")}
            className="p_p"
            onClick={() => navigate("/feed")}
            alt="logo"
          />
        </Col>
        <Col md={6} sm={6} xs={6} className="right_col_nav m-0 p-0">
          <div style={{ float: "right" }}>
            <BsPlus style={{ fontSize: 40, color:'grey' }} onClick={toggle} />
            <img
              src={require("../img/Capture.jpg")}
              className="p_p"
              onClick={() => navigate("/profile")}
              alt='profile_pic'
            />
          </div>
        </Col>
      </Row>
      <Modal isOpen={openModal} toggle={toggle}>
        <div className="p-3">
          <h5 className="in_app_title">Request</h5>
          <p>What service do you require today?</p>
          <div>
            <div className="service_div">Travel with me</div>
            <div className="service_div">Tail me</div>
            <div className="service_div"> Shop with me</div>
            <div className="service_div"> Recreational</div>
          </div>
        </div>
      </Modal>
    </>
  );
}
