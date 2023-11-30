import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/MainTheme";
import GlobalStyle from "../styles/GlobalStyle";

const customRender = (children: React.ReactElement) =>
  render(
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </BrowserRouter>,
  );

export default customRender;
