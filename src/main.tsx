import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./Login";

interface Props {}

const AppNavigator: React.FC<Props> = () => {
  let element = useRoutes([
    { path: "/", element: <Navigate to="/app" /> },
    { path: "/app", element: <Login /> },
  ]);
  return element;
};

export default AppNavigator;
