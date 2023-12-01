import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import NavMenu from "./NavMenu";
import mockNeighbours from "../../mocks/mockNeighbours";

describe("Given a NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' text", () => {
      const mockData = mockNeighbours;
      const expectedText = "Home";

      customRender(<NavMenu />, mockData);
      const text = screen.getByRole("link", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
