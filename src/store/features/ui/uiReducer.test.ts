import {
  hideLoadingactionCreator,
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
        hideLoadingactionCreator(),
      );

      expect(isLoadingFalse).toStrictEqual(initialMockedUiState);
    });
  });
});
