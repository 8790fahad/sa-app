import React, { useState } from "react";
import { Card, Col, Modal, Row } from "reactstrap";
import { BsChat } from "react-icons/bs";

export default function Feed() {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);
  return (
    <div>
      <Row className="m-0">
        <Col md={4}></Col>
        <Col md={4}>
          <Card className="feed_card shadow-sm p-3">
            <div className="btn_grp">
              <button className="app_btn ">
                <BsChat />
              </button>
              <button className="app_btn" onClick={toggle}>
                Request
              </button>
              <button className="app_btn cnt">Connect</button>
            </div>
          </Card>
        </Col>
        <Col md={4}></Col>
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
    </div>
  );
}
