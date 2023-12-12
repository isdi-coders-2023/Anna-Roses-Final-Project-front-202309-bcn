import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import CreateNeighbourPage from "./CreateNeighbourPage";

describe("Given a CreateNeighbourPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Añade un vecino'", () => {
      const expectedTitle = "Añade un vecino";

      customRender(<CreateNeighbourPage />);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show 'Coeficiente (%)'", () => {
      const labelText = "Coeficiente (%)";

      customRender(<CreateNeighbourPage />);
      const label = screen.getByLabelText(labelText);

      expect(label).toBeInTheDocument();
    });
  });
});
