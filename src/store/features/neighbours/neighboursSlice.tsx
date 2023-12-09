import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NeighbourStructure, NeighboursStateStructure } from "../types";

const initialNeighbours: NeighboursStateStructure = {
  neighbours: [],
  selectedNeighbour: {} as NeighbourStructure,
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

    deleteNeighbour: (
      currentState,
      action: PayloadAction<string>,
    ): NeighboursStateStructure => ({
      ...currentState,
      neighbours: currentState.neighbours.filter(
        (neighbour) => neighbour._id !== action.payload,
      ),
    }),

    addNeighbour: (
      currentState: NeighboursStateStructure,
      action: PayloadAction<NeighbourStructure>,
    ): NeighboursStateStructure => ({
      ...currentState,
      neighbours: [...currentState.neighbours, action.payload],
    }),

    loadSelectedNeighbour: (
      currentState,
      action: PayloadAction<NeighbourStructure>,
    ) => ({
      ...currentState,
      selectedNeighbour: action.payload,
    }),
  },
});

export const {
  loadNeighbours: loadNeighboursActionCreator,
  deleteNeighbour: deleteNeighbourActionCreator,
  addNeighbour: addNeighbourActionCreator,
  loadSelectedNeighbour: loadSelectedNeighbourActionCreator,
} = neighbourSlice.actions;

export const neighboursReducer = neighbourSlice.reducer;
