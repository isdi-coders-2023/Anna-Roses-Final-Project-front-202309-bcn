import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

export const initialUiState: UiStructure = {
  isLoading: false,
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentState) => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingactionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
