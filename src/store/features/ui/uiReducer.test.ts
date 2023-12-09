import {
  hideErrorActionCreator,
  hideLoadingActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading minireducer", () => {
  describe("When it receives a currentUiState with the property isLoading false", () => {
    test("Then it should change the property to true", () => {
      const initialMockedUiState = { isLoading: true };
      const isLoadingTrue = uiReducer(
        initialMockedUiState,
        showLoadingActionCreator(),
      );

      expect(isLoadingTrue).toStrictEqual(initialMockedUiState);
    });
  });
});

describe("Given a hideLoading minireducer", () => {
  describe("When it receives a currentUiState with the property isloading true", () => {
    test("Then it should change it to false", () => {
      const initialMockedUiState = { isLoading: false };
      const isLoadingFalse = uiReducer(
        initialMockedUiState,
        hideLoadingActionCreator(),
      );

      expect(isLoadingFalse).toStrictEqual(initialMockedUiState);
    });
  });
});

describe("Given a showError minireducer", () => {
  describe("When it receives a currentUiState with isError property set as false", () => {
    test("Then it should change it to true", () => {
      const initialMockedUiState = { isError: false };
      const finalMockedUiState = { isError: true };

      const isErrorTrue = uiReducer(
        initialMockedUiState,
        showErrorActionCreator(),
      );

      expect(isErrorTrue).toStrictEqual(finalMockedUiState);
    });
  });
});

describe("Given a hideError minireducer", () => {
  describe("When it receives a currentUiState with isError property set as true", () => {
    test("Then it should change it to false", () => {
      const initialMockedUiState = { isError: true };
      const finalMockedUiState = { isError: false };

      const isErrorFalse = uiReducer(
        initialMockedUiState,
        hideErrorActionCreator,
      );

      expect(isErrorFalse).toStrictEqual(finalMockedUiState);
    });
  });
});
