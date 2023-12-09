import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import mainTheme from "../styles/MainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { neighboursReducer } from "../store/features/neighbours/neighboursSlice";
import { uiReducer } from "../store/features/ui/uiSlice";
import { mockNeighbours } from "../mocks/mockNeighbours";
import TostifyStiled from "../styles/shared/TostifyStyled/TostifyStyled";
import ScrollToTop from "../utils/ScrollToTopFunction";

export const customRender = (children: React.ReactElement) => {
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
    <MemoryRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <TostifyStiled />
          <ScrollToTop />
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
