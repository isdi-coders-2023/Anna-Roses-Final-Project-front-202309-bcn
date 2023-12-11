import { mockNeighboursModified } from "../../../../mocks/mockNeighbours";
import { NeighbourStructure, NeighboursStateStructure } from "../../types";
import {
  modifyNeihbourActionCreator,
  neighboursReducer,
} from "../neighboursSlice";

describe("Given a neighbourReducer reducer", () => {
  describe("When it receives a neighbours List, a 'Marta Ibarra Chef' modified", () => {
    test("Then it should return the list of enighbours with 'Marta Ibarra Chef' modified", () => {
      const mockWithModifiedNeighbour = mockNeighboursModified;
      const modifiedNeighbour = { ...mockWithModifiedNeighbour[0] };

      const initialState: NeighboursStateStructure = {
        neighbours: mockWithModifiedNeighbour,
        selectedNeighbour: {} as NeighbourStructure,
      };

      const currentNeighbourState = neighboursReducer(
        initialState,
        modifyNeihbourActionCreator(modifiedNeighbour),
      );

      expect(currentNeighbourState.neighbours).toStrictEqual(
        mockWithModifiedNeighbour,
      );
    });
  });
});
