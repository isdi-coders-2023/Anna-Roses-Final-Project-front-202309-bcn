import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NeighbourStructure, NeighboursStateStructure } from "../types";

const initialNeighbours: NeighboursStateStructure = {
  neighbours: [],
};

const neighbourSlice = createSlice({
  name: "neighbours",
  initialState: initialNeighbours,
  reducers: {
    loadNeighbours: (
      currentState,
      action: PayloadAction<NeighbourStructure[]>,
    ): NeighboursStateStructure => ({
      ...currentState,
      neighbours: action.payload,
    }),
  },
});

export const { loadNeighbours: loadNeighboursActionCreator } =
  neighbourSlice.actions;
export const neighboursReducer = neighbourSlice.reducer;
