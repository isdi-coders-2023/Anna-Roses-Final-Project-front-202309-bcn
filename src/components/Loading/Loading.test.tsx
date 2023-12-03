import { screen } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import customRender from "../../testUtils/customRender";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'cargando' in the alt image text", () => {
      const expectedAltText = "cargando";
      const mockList = mockNeighbours;

      customRender(<Loading />, mockList);
      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
