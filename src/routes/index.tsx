import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const Router: React.FC = () => {
  return useRoutes(routes);
};

export default Router;
