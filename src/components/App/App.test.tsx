import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import App from "./App";
import mockNeighbours from "../../mocks/mockNeighbours";

describe("Given a App component", () => {
  const mockData = mockNeighbours;
  describe("When it is rendered", () => {
    test(
      "Then it should show an image with an alt text 'Mi comunidad favorita logo'",
    );
    const expectedAltText = "Mi comunidad favorita logo";
    customRender(<App />, mockData);
    const altText = screen.getByRole("img", { name: expectedAltText });

    expect(altText).toBeInTheDocument();
  });

  describe("When it receives a click on the 'Home' link", () => {
    test("Then it should show a title 'Administra tu comunidad' on a heading", () => {
      const homePageTitle = "Administra tu comunidad";
      const homeLink = "Home";

      customRender(<App />, mockData);
      const link = screen.getByRole("link", { name: homeLink });
      const title = screen.getByRole("heading", { name: homePageTitle });

      expect(title).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });
});
