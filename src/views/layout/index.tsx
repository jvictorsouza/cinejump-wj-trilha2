import React from "react";
import { Styles, StylesContainer, StylesContainerHeader } from "./styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
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
