import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import NavMenu from "./NavMenu";

describe("Given a NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' text", () => {
      const expectedText = "Home";

      customRender(<NavMenu />);
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
