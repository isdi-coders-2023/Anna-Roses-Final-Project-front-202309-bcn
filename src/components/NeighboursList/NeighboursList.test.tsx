import { screen } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import NeighboursList from "./NeighboursList";
import { customRender } from "../../testUtils/customRender";

describe("Given a List component", () => {
  describe("When it is rendered and receives a list of two neighbours", () => {
    test("Then it should create two images in a list of two neighbours", () => {
      const mockList = mockNeighbours;

      customRender(<NeighboursList />, mockList);

      mockList.forEach((neighbour) => {
        const headings = screen.getByRole("heading", { name: neighbour.name });

        expect(headings).toBeInTheDocument();
      });
    });
  });
});
