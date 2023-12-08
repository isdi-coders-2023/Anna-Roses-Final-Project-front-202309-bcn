import { screen } from "@testing-library/react";
import NeighboursList from "./NeighboursList";
import { customRender } from "../../testUtils/customRender";
import { mockNeighbours } from "../../mocks/mockNeighbours";

describe("Given a List component", () => {
  describe("When it is rendered and receives a list of two neighbours", () => {
    test("Then it should create two images in a list of two neighbours", () => {
      const mockList = mockNeighbours;

      customRender(<NeighboursList />);

      mockList.forEach((neighbour) => {
        const headings = screen.getByRole("heading", { name: neighbour.name });

        expect(headings).toBeInTheDocument();
      });
    });
  });
});
