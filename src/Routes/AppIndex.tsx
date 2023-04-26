import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Navbar from "../Components/Navbar";
export default function AppIndex() {
  return (
    <div>
      <Row className="m-0">
        <Navbar/>
        <Col md={12} className="p-0 m-0">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}
