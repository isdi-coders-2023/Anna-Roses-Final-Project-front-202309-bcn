import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NeighbourStructure, NeighboursStructure } from "../../types";

const initialNeighbours: NeighboursStructure = {
  neighbours: [],
};

const neighbourSlice = createSlice({
  name: "neighbours",
  initialState: initialNeighbours,
  reducers: {
    loadNeighbours: (
      currentState,
      action: PayloadAction<NeighbourStructure[]>,
    ): NeighboursStructure => {
      return {
        ...currentState,
        neighbours: action.payload,
      };
    },
  },
});

export const { loadNeighbours: loadNeighboursActioncreator } =
  neighbourSlice.actions;

export const neighboursReducer = neighbourSlice.reducer;
