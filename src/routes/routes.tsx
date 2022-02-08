import React from "react";
import { PartialRouteObject } from "react-router";
import Home from "../views/home";
import Layout from "../views/layout";
import User from "../views/user";

const routes: PartialRouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: (() => (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <span style={{ color: "red", fontWeight: "bold" }}>
          Rota não encontrada
        </span>
      </div>
    ))(),
  },
];

export default routes;
