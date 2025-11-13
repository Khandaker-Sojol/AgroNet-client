import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllCrops from "../pages/AllCrops";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/privateRoute";
import Profile from "../pages/Profile";
import MyPosts from "../pages/MyPosts";
import MyInterests from "../pages/MyInterests";
import AddCrops from "../pages/AddCrops";
import CropDetails from "../components/CropDetails";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-crops",
        element: <AllCrops></AllCrops>,
      },
      {
        path: "/crops/:id",
        element: <CropDetails></CropDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-crops",
        element: (
          <PrivateRoute>
            <AddCrops></AddCrops>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoute>
            <MyPosts></MyPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-interests",
        element: (
          <PrivateRoute>
            <MyInterests></MyInterests>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
