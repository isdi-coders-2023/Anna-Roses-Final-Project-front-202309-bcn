import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Administra tu comunidad'", () => {
      const expectedTitle = "Administra tu comunidad";

      customRender(<HomePage />);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument;
    });
  });
});
