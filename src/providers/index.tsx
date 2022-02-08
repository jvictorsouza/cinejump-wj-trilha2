import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/themes/default";

const Providers = [
  <ThemeProvider theme={defaultTheme} />,
];

export default Providers;
