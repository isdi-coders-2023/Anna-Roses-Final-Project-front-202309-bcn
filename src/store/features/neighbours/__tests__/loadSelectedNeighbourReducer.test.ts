import { mockMartaNeighbour } from "../../../../mocks/mockNeighbours";
import { NeighbourStructure, NeighboursStateStructure } from "../../types";
import {
  loadSelectedNeighbourActionCreator,
  neighboursReducer,
} from "../neighboursSlice";

describe("Given a neighbourReducer reducer", () => {
  describe("When it receives a neighbour list and the neighbour 'Marta Ibarra Chef'", () => {
    test("Then it should return the list of neighbours with 'Marta Ibarra Chef' selected", () => {
      const initialState: NeighboursStateStructure = {
        neighbours: [],
        selectedNeighbour: {} as NeighbourStructure,
      };
      const selectedNeighbour = mockMartaNeighbour;

      const currentNeighbourState = neighboursReducer(
        initialState,
        loadSelectedNeighbourActionCreator(selectedNeighbour),
      );

      expect(currentNeighbourState.selectedNeighbour).toStrictEqual(
        selectedNeighbour,
      );
    });
  });
});
