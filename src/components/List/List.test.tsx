import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import mockNeighbours from "../../testUtils/mockNeighbours";
import List from "./List";

describe("Given a List component", () => {
  describe("When it is rendered and receives a list of two neighbours", () => {
    test("Then it should create two images in a list of two neighbours", () => {
      const mockList = mockNeighbours;
      const expectedNumberOfItems = 2;

      customRender(<List />, mockList);
      const list = screen.getAllByRole("img").length;

      expect(list).toBe(expectedNumberOfItems);
    });
  });
});
