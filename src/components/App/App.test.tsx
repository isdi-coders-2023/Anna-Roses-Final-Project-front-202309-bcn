import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import App from "./App";
import mockNeighbours from "../../testUtils/mockNeighbours";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test(
      "Then it should show an image with an alt text 'mi-comunidad-favorita-logo'",
    );
    const expectedAltText = "mi-comunidad-favorita-logo";
    const mockData = mockNeighbours;

    customRender(<App />, mockData);
    const altText = screen.getByRole("img", { name: expectedAltText });

    expect(altText).toBeInTheDocument();
  });
});
