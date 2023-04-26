import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function WelcomeScreen() {
  const navigate =useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 200);
  }, [navigate]);
  return <div>welcome screen</div>;
}
