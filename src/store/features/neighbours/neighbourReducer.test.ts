import {
  mockAddNeighbours,
  mockNeighbours,
} from "../../../mocks/mockNeighbours";
import { NeighboursStateStructure } from "../types";
import {
  addNeighbourActionCreator,
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

  describe("When it receives a list of two neighbours, an existing neighbour id and the deleteNeighbour function", () => {
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

  describe("When it receives a neighbours list, 'Ana Lambea Andorrana' and the action addHotel", () => {
    test("Then it shoyld return the list of neighbours with 'Ana Lambea Andorrana' in it", () => {
      const mockList = mockNeighbours;
      const mockAddNeighbourList = mockAddNeighbours;
      const initialState: NeighboursStateStructure = { neighbours: mockList };
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
