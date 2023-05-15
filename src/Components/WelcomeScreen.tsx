import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function WelcomeScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 400);
  }, [navigate]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ fontWeight: "800", fontSize: 20, color: "#6bbd8c" }}>
        welcome screen
      </div>
    </div>
  );
}
