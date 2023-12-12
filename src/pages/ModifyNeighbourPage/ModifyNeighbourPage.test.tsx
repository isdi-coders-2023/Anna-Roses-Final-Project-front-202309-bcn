import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import ModifyNeighbourPage from "./ModifyNeighbourPage";

describe("Given a ModifyNeighboyrPage component", () => {
  describe("When it is rendered", () => {
    test("it should show 'Nombre y apellidos' label text", () => {
      const labelText = "Nombre y apellidos";

      customRender(<ModifyNeighbourPage />);

      const label = screen.getByLabelText(labelText);

      expect(label).toBeInTheDocument();
    });
  });
});
