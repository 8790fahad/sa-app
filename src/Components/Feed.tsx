import React from "react";
import { Card, Col, Row } from "reactstrap";
import { BsChat, BsShare } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const navigate = useNavigate();
  const feed = [
    {
      image: (
        <img
          src={require("../img/Capture.jpg")}
          className="p_p"
          onClick={() => navigate("/profile")}
          alt="profile_pic"
        />
      ),
      name: "Fahad Muhammad",
      time: "2 hrs ago",
      post: "I am going for work out tomorrow! Any one interested?",
    },
  ];
  return (
    <div>
      <Row className="m-0">
        <Col md={4}></Col>
        <Col md={4} className="p-3">
          {feed.map((item, index) => (
            <Card className="feed_card shadow-sm mb-3">
              <Row className="p-1">
                <Col
                  md={10}
                  sm={10}
                  xs={10}
                  className="d-flex"
                  style={{ alignItems: "center" }}
                >
                  {item.image}
                  <div>
                    <h6 className="m-0">{item.name}</h6>
                    <p className="m-0" style={{ fontSize: 12, color: "grey" }}>
                      {item.time}
                    </p>
                  </div>
                </Col>
                <Col
                  md={2}
                  sm={2}
                  xs={2}
                  className="d-flex"
                  style={{ alignItems: "center" }}
                >
                  <FaEllipsisV />
                </Col>
              </Row>
              <div className="p-2">
                <h6>{item.post}</h6>
              </div>
              <Row className="p-2">
                <Col md={4} sm={4} xs={4}>
                  <button className="app_btn" onClick={() => navigate("/chat")}>
                    <BsChat />
                  </button>
                </Col>
                <Col md={8} sm={8} xs={8}>
                  <div className="btn_grp" style={{ float: "right" }}>
                    <button className="app_btn">
                      <BsShare />
                    </button>
                    <button className="app_btn cnt">Connect</button>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
