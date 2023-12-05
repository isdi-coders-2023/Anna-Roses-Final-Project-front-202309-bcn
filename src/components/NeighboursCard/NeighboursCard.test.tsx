import { screen, waitFor } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import NeighboursCard from "./NeighboursCard";
import { customRender } from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";

describe("Given a Card component", () => {
  const mockList = mockNeighbours;

  describe("When it is rendered and recives a neighbour and a key number 0", () => {
    test("Then it should show 'Marta Ibarra Chef' in the alternative text of the image", () => {
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

  describe("When it receives a click on the 'Eliminar 'button of 'Marta Ibarra Chef'", () => {
    test("Then it should not show 'Marta Ibarra Chef' neighbour", async () => {
      const buttonText = "Eliminar";
      const neighbourName = "Marta Ibarra Chef";

      customRender(<NeighboursCard neighbour={mockList[0]} />, mockList);
      const button = screen.getByRole("button", { name: buttonText });
      const heading = screen.getByRole("heading", { name: neighbourName });
      await userEvent.click(button);

      waitFor(() => {
        expect(heading).not.toBeInTheDocument();
      });
    });
  });
});
