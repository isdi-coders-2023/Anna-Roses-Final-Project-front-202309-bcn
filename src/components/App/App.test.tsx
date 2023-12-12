import { fireEvent, screen } from "@testing-library/react";
import App from "./App";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  const spyScrollTo = vi.fn();
  Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

  describe("When it is rendered", () => {
    test(
      "Then it should show an image with an alt text 'Mi comunidad favorita logo'",
    );

    const expectedAltText = "Mi comunidad favorita logo";

    customRender(<App />);
    const altText = screen.getByRole("img", { name: expectedAltText });

    expect(altText).toBeInTheDocument();
  });

  describe("When it receives a click on the 'Home' link in the navigation menu", () => {
    test("Then it should show a title 'Administra tu comunidad' on a heading", () => {
      const homePageTitle = "Administra tu comunidad";
      const homeLink = "Home";

      customRender(<App />);
      const link = screen.getByRole("link", { name: homeLink });
      const title = screen.getByRole("heading", { name: homePageTitle });

      expect(title).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });

  describe("When it receives an unknown path /jasd and it renders the Not Found Page", () => {
    test("Then it should show 'minion in alarm mode'", () => {
      const expectedAltText = "minion in alarm mode";
      const path = "/jasd";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );
      const alarmModeImage = screen.getByAltText(expectedAltText);

      expect(alarmModeImage).toBeInTheDocument();
    });
  });

  describe("When it is rendered on the ModifyNeighbourPage and the user changes the user changes coment of the 'Marta Ibarra Chef' and clicks on the button to modify", () => {
    test("Then it should modify 'Marta Ibarra Chef' and go to de HomePage", async () => {
      const buttonText = "Modificar";
      const titleText = "Administra tu comunidad";
      const path = "/modificar/6563639cc4ddfcae99eeb07a";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      const button = screen.getByRole("button", { name: buttonText });

      await fireEvent.submit(button);

      const title = await screen.findByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
