import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import HomePage from "./HomePage";
import mockNeighbours from "../../testUtils/mockNeighbours";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Administra tu comunidad'", () => {
      const expectedTitle = "Administra tu comunidad";
      const mockData = mockNeighbours;

      customRender(<HomePage />, mockData);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument;
    });
  });
});
