import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Styles, StylesContainer, StylesContainerHeader } from "./styles";

const Layout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("session")) navigate("/user");
  }, [navigate]);

  return (
    <Styles>
      <StylesContainerHeader>
        <Header />
      </StylesContainerHeader>
      <StylesContainer>
        <Outlet />
      </StylesContainer>
      <Footer />
    </Styles>
  );
};

export default Layout;
