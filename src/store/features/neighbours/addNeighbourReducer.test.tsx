import {
  mockAddNeighbours,
  mockNeighbours,
} from "../../../mocks/mockNeighbours";
import { NeighbourStructure, NeighboursStateStructure } from "../types";
import {
  addNeighbourActionCreator,
  neighboursReducer,
} from "./neighboursSlice";

describe("Given a neighbourReducer reducer", () => {
  describe("When it receives a neighbours list, 'Ana Lambea Andorrana' and the action addNeighbour", () => {
    test("Then it should return the list of neighbours with 'Ana Lambea Andorrana' in it", () => {
      const mockList = mockNeighbours;
      const mockAddNeighbourList = mockAddNeighbours;
      const initialState: NeighboursStateStructure = {
        neighbours: mockList,
        selectedNeighbour: {} as NeighbourStructure,
      };
      const newNeighbour = mockAddNeighbourList[2];

      const currentNeighbourState = neighboursReducer(
        initialState,
        addNeighbourActionCreator(newNeighbour),
      );

      expect(currentNeighbourState.neighbours).toStrictEqual(
        mockAddNeighbourList,
      );
    });
  });
});
