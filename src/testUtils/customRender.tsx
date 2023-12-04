import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/MainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { NeighbourStructure } from "../store/features/types";
import { configureStore } from "@reduxjs/toolkit";
import { neighboursReducer } from "../store/features/neighbours/neighboursSlice";
import { Provider } from "react-redux";
import { uiReducer } from "../store/features/ui/uiSlice";
import mockNeighbours from "../mocks/mockNeighbours";

export const customRender = (
  children: React.ReactElement,
  mockData: NeighbourStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      neighboursState: neighboursReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      neighboursState: { neighbours: mockData },
      uiState: { isLoading: false },
    },
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

export const customRenderWithoutRouter = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      neighboursState: neighboursReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      neighboursState: { neighbours: mockNeighbours },
      uiState: { isLoading: false },
    },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};
