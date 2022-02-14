import React from "react";
import { ContentProps } from "../interfaces";
import { ContentStyled } from "./styles";

const SecondaryContent: React.FC<ContentProps> = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};
export default SecondaryContent;
