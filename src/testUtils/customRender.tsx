import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/MainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { NeighbourStructure } from "../store/types";
import { configureStore } from "@reduxjs/toolkit";
import { neighboursReducer } from "../store/features/neighbours/neighboursSlice";
import { Provider } from "react-redux";

const customRender = (
  children: React.ReactElement,
  mockData: NeighbourStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      neighboursState: neighboursReducer,
    },
    preloadedState: { neighboursState: { neighbours: mockData } },
  });

  render(
    <MemoryRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </MemoryRouter>,
  );
};

export default customRender;
