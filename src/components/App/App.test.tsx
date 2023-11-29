import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import App from "./App";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test(
      "Then it should show an image with an alt text 'mi-comunidad-favorita-logo'",
    );
    const expectedAltText = "mi-comunidad-favorita-logo";

    customRender(<App />);
    const altText = screen.getByRole("img", { name: expectedAltText });

    expect(altText).toBeInTheDocument();
  });
});
