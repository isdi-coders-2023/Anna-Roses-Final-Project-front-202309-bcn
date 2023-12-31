import { screen } from "@testing-library/react";
import Loading from "./Loading";
import { customRender } from "../../testUtils/customRender";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'cargando' in the alt image text", () => {
      const expectedAltText = "cargando";

      customRender(<Loading />);
      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
