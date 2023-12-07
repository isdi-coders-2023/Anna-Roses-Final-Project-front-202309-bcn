import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

body,
h1,
h2 {
  margin: 0;
}

body {
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  color: ${({ theme }) => theme.color.mainFontColor};
  font-size: ${({ theme }) => theme.typography.textSize};
}

ul, li {
  list-style: none;
  margin-top: 0;
  padding: 0;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  background-color: transparent;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

button {
  border: none;
  background-color: transparent;
  font: inherit;
  cursor: pointer;
}

button:hover {
  background-color: ${({ theme }) => theme.color.mainFontColor};
  color: ${({ theme }) => theme.color.softBackgroundColor};
}
`;

export default GlobalStyle;
