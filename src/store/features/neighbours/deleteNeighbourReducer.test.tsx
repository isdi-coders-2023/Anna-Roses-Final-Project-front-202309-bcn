import { mockNeighbours } from "../../../mocks/mockNeighbours";
import { NeighbourStructure, NeighboursStateStructure } from "../types";
import {
  deleteNeighbourActionCreator,
  neighboursReducer,
} from "./neighboursSlice";

describe("Given a neighbourReducer reducer", () => {
  describe("When it receives a list of two neighbours, an existing neighbour id and the deleteNeighbour function", () => {
    test("Then it should return the list of one neighbour without the deleted neighbour 'Marta Ibarra Chef'", () => {
      const initialState: NeighboursStateStructure = {
        neighbours: mockNeighbours,
        selectedNeighbour: {} as NeighbourStructure,
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
