import { screen } from "@testing-library/react";
import mockNeighbours from "../../../mocks/mockNeighbours";
import { customRender } from "../../../testUtils/customRender";
import CreateNeighbourPage from "../CreateNighbourPage";

describe("Given a CreateNeighbourPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Añade un vecino'", () => {
      const expectedTitle = "Añade un vecino";
      const mockData = mockNeighbours;

      customRender(<CreateNeighbourPage />, mockData);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
