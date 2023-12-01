import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import mockNeighbours from "../../mocks/mockNeighbours";
import NeighboursCard from "./NeighboursCard";

describe("Given a Card component", () => {
  describe("When it is rendered and recives a neighbour and a key number 0", () => {
    test("Then it should show 'Marta Ibarra Chef' in the alternative text of the image", () => {
      const mockList = mockNeighbours;
      const mockNeighbour = mockList[0];
      const expectedText = mockNeighbour.name;

      customRender(
        <NeighboursCard key={0} neighbour={mockNeighbour} />,
        mockList,
      );
      const text = screen.getByRole("img", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
