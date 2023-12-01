import mockNeighbours from "../../../mocks/mockNeighbours";
import { NeighboursStateStructure } from "../types";
import {
  loadNeighboursActioncreator,
  neighboursReducer,
} from "./neighboursSlice";

describe("Given a peopleReducer reducer", () => {
  describe("When it receives an empty list and a people list", () => {
    test("Then it should return a List of 2 people in it", () => {
      const currentListState: NeighboursStateStructure = {
        neighbours: [],
      };
      const neighboursList = mockNeighbours;

      const newNeighboursState = neighboursReducer(
        currentListState,
        loadNeighboursActioncreator(neighboursList),
      );

      expect(newNeighboursState.neighbours).toStrictEqual(neighboursList);
    });
  });
});
