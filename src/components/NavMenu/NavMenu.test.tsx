import { screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { customRender } from "../../testUtils/customRender";

describe("Given a NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' text", () => {
      const expectedText = "Home";

      customRender(<NavMenu />);
      const text = screen.getByRole("link", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
