import React from "react";
import { Styles, StylesText } from "./styles";
import { LoremIpsum } from "../../constants/constants";

const Home: React.FC = (...props) => {
  return (
    <Styles>
      <StylesText>
        <h2>Seja bem-vindo!</h2>
        <span>{LoremIpsum}</span>
      </StylesText>
    </Styles>
  );
};

export default Home;
