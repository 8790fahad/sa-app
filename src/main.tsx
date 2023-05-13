import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./Components/Login";
import WelcomeScreen from "./Components/WelcomeScreen";
import AppIndex from "./Routes/AppIndex";
import Feed from "./Components/Feed";
import Chat from "./Components/Chat";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import ShopWithMe from "./Components/ShopWithMe";
import TailMe from "./Components/TailMe";
import TravelWithMe from "./Components/TravelWithMe";
import Recreational from "./Components/Recreational";
import Notifications from "./Components/Notifications";
import SpecialOffer from "./Components/SpecialOffer";
import Location from "./Components/Location";
import Distance from "./Components/Distance";

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
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/shop-with-me",
          element: <ShopWithMe />,
        },
        {
          path: "/tail-me",
          element: <TailMe />,
        },
        {
          path: "/recreational",
          element: <Recreational />,
        },
        {
          path: "/travel-with-me",
          element: <TravelWithMe />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/special-offer",
          element: <SpecialOffer />,
        },
        {
          path:'/location',
          element:<Location/>
        },
        {
          path:'/distance',
          element:<Distance/>
        }
      ],
    },
    {
      path: "/welcome",
      element: <WelcomeScreen />,
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
