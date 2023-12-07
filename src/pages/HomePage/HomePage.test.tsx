import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { customRender } from "../../testUtils/customRender";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Administra tu comunidad'", () => {
      const expectedTitle = "Administra tu comunidad";

      customRender(<HomePage />);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
