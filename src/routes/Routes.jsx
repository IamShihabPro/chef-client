import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home";
import Chefs from "../page/Chefs/Chefs";
import About from "../page/About/About";
import Blog from "../page/Blogs/Blog";
import Dishes from "../page/Dishes/Dishes";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefsDetails from "../page/Chefs/ChefsDetails";
import Cards from "../page/Cards/Cards";
import ChefsData from "../page/Chefs/ChefsData";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AuthProviders from "../Providers/AuthProviders";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefs",
        element: (
          <PrivateRoutes>
            {" "}
            <Chefs></Chefs>{" "}
          </PrivateRoutes>
        ),
        loader: () => fetch("https://chef-server-iamshihabpro.vercel.app/data"),
      },
      {
        path: "/chefs/:id",
        element: <ChefsData></ChefsData>,
        loader: ({ params }) =>
          fetch(
            `https://chef-server-iamshihabpro.vercel.app/data/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/dishes",
        element: <Dishes></Dishes>,
        loader: () => fetch("https://chef-server-iamshihabpro.vercel.app/data"),
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
        path: "/cards",
        element: <Cards></Cards>,
        loader: () => fetch("https://chef-server-iamshihabpro.vercel.app/data"),
      },

      {
        path: "/auth",
        element: <AuthProviders></AuthProviders>,
      },
    ],
  },
]);

export default router;
