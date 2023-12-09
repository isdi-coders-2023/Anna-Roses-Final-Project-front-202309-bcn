import { mockNeighbours } from "../../../mocks/mockNeighbours";
import { NeighbourStructure, NeighboursStateStructure } from "../types";
import {
  loadNeighboursActionCreator,
  neighboursReducer,
} from "./neighboursSlice";

describe("Given a neighbourReducer reducer", () => {
  describe("When it receives an empty list and a people list", () => {
    test("Then it should return a List of 2 people in it", () => {
      const currentListState: NeighboursStateStructure = {
        neighbours: [],
        selectedNeighbour: {} as NeighbourStructure,
      };
      const neighboursList = mockNeighbours;

      const newNeighboursState = neighboursReducer(
        currentListState,
        loadNeighboursActionCreator(neighboursList),
      );

      expect(newNeighboursState.neighbours).toStrictEqual(neighboursList);
    });
  });
});
