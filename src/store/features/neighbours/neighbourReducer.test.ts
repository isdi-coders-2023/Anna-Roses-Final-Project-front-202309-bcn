import mockNeighbours from "../../../mocks/mockNeighbours";
import { NeighboursStateStructure } from "../types";
import {
  deleteNeighbourActionCreator,
  loadNeighboursActionCreator,
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
        loadNeighboursActionCreator(neighboursList),
      );

      expect(newNeighboursState.neighbours).toStrictEqual(neighboursList);
    });
  });

  describe("When it receives a list of two neighbours, an existing neighbour id and the deleteNeighbour method", () => {
    test("Then it should return the list of one neighbour without the deleted neighbour 'Marta Ibarra Chef'", () => {
      const initialState: NeighboursStateStructure = {
        neighbours: mockNeighbours,
      };
      const expectedDeletedNeighbour = "Marta Ibarra Chef";
      const expectedNeighbourId = "6563639cc4ddfcae99eeb07a";

      const currentNeighbourState = neighboursReducer(
        initialState,
        deleteNeighbourActionCreator(expectedNeighbourId),
      );

      currentNeighbourState.neighbours.forEach((neighbour) => {
        expect(neighbour).not.toHaveProperty("name", expectedDeletedNeighbour);
      });
    });
  });
});
