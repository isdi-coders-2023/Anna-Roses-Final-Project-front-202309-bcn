import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";
import NavMenu from "./NavMenu";
import App from "../App/App";

describe("Given a NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' text", () => {
      const expectedText = "Home";

      customRender(<NavMenu />);
      const text = screen.getByRole("link", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it receives a click on the 'Home' link", () => {
    test("Then it should show a title 'Administra tu comunidad' on a heading", () => {
      const homePageTitle = "Administra tu comunidad";
      const homeLink = "Home";
      const user = userEvent.setup();

      customRender(<App />);
      const link = screen.getByRole("link", { name: homeLink });
      const title = screen.getByRole("heading", { name: homePageTitle });
      user.click(link);

      expect(title).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });
});
