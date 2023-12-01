import { DefaultTheme } from "styled-components";

export interface DefaultTheme {
  color: {
    mainFontColor: string;
    headerColor: string;
    navMenuColor: string;
    softColor: string;
    errorColor: string;
    successColor: string;
  };
  typography: {
    mainFontFamily: {
      mainFontFamily: string;
      pageTitleSize: string;
      cardTitleSize: string;
      textSize: string;
      errorPage404: string;
      errorPageOops: string;
    };
  };
}
