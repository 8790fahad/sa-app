import React, { useState } from "react";
import { Card, Col, Modal, Row } from "reactstrap";
import { BsCameraFill, BsImageFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import {TbShare3} from 'react-icons/tb'
import { AiOutlineHeart } from "react-icons/ai";
export default function Feed() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
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
      <div className="post_section p-3">
        <div className="message_text_area text-secondary mb-1" onClick={toggle}>
          Post here..
        </div>

        <div className="post_at_div">
          <BsImageFill className="post_icon" />
          <span className="icon_spn">Photo</span>
          <BsCameraFill className="post_icon" />
          <span className="icon_spn">Video</span>
          <MdLocationOn className="post_icon" />
          <span className="icon_spn">Location</span>
        </div>
        {/* <div>
          <button className="post_btn">Post</button>
        </div> */}
      </div>
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
                <Col md={8} sm={8} xs={8}>
                  <div className="btn_grp">
                    <AiOutlineHeart />
                    <TbShare3/>
                  </div>
                </Col>
                <Col md={4} sm={4} xs={4}>
                  <button
                    className="app_btn cnt"
                    onClick={() => navigate("/chat")}
                  >
                    Connect
                  </button>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={4}></Col>
      </Row>

      <Modal isOpen={open} toggle={toggle}>
        <div className="p-3">
          <textarea
            className="message_text_area"
            placeholder="Post here..."
            rows={1}
          ></textarea>
        </div>
      </Modal>
    </div>
  );
}
