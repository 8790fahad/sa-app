import React, { useState } from "react";
import { MdSend } from "react-icons/md";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [chat] = useState([""]);

  const chatPost = () => {
    setMessage("");
    chat.push(message);
  };
  return (
    <div>
      <div className="p-3">
        <h5 className="in_app_title">Chat</h5>
        <p className="m-0">Start conversation with your friends</p>
      </div>
      <div className="mg-danger">
        {chat.slice(1).map((item) => (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="mssg">
              <div color="white p-2">{item}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="type_area">
        <textarea
          className="message_text_area"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Write here..."
          rows={1}
        ></textarea>

        <MdSend onClick={chatPost} className="send_btn" />
      </div>
    </div>
  );
}
