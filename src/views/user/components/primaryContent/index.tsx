import React from "react";
import { ContentProps } from "../interfaces";
import { ContentStyled } from "./styles";

const PrimaryContent: React.FC<ContentProps> = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};
export default PrimaryContent;
