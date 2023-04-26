import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./Components/Login";
import WelcomeScreen from "./Components/WelcomeScreen";
import AppIndex from "./Routes/AppIndex";
import Feed from "./Components/Feed";
import Chat from "./Components/Chat";
import Register from "./Components/Register";

interface Props {}

const AppNavigator: React.FC<Props> = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <WelcomeScreen />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "/feed",
          element: <Feed />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return element;
};

export default AppNavigator;
