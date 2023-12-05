import { screen } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import NeighboursList from "./NeighboursList";
import { customRender } from "../../testUtils/customRender";

describe("Given a List component", () => {
  describe("When it is rendered and receives a list of two neighbours", () => {
    test("Then it should create two images in a list of two neighbours", () => {
      const mockList = mockNeighbours;
      const length = 2;

      customRender(<NeighboursList />, mockList);
      const list = screen.getAllByRole("heading").length;

      expect(list).toBe(length);
    });
  });
});
