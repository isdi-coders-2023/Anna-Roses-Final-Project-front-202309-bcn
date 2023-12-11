import { screen, waitFor } from "@testing-library/react";
import NeighboursCard from "./NeighboursCard";
import { customRender } from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { mockMartaNeighbour, mockNeighbours } from "../../mocks/mockNeighbours";

describe("Given a Card component", () => {
  const mockList = mockNeighbours;

  describe("When it is rendered and recives a neighbour and a key number 0", () => {
    test("Then it should show 'Marta Ibarra Chef' in the alternative text of the image", () => {
      const mockNeighbour = mockList[0];
      const expectedText = mockNeighbour.name;

      customRender(<NeighboursCard key={0} neighbour={mockNeighbour} />);
      const text = screen.getByRole("img", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it receives a click on the 'Eliminar' button of 'Marta Ibarra Chef'", () => {
    const buttonText = "Eliminar";

    test("Then it should not show 'Marta Ibarra Chef' neighbour", async () => {
      const neighbourName = "Marta Ibarra Chef";

      customRender(<NeighboursCard neighbour={mockList[0]} />);
      const button = screen.getByRole("button", { name: buttonText });
      const heading = screen.getByRole("heading", { name: neighbourName });
      await userEvent.click(button);

      waitFor(() => {
        expect(heading).not.toBeInTheDocument();
      });
    });

    test("Then it should show a feedback message with 'Hemos eliminado al vecino!'", async () => {
      const feedbackSuccess = "Hemos eliminado al vecino!";
      customRender(<NeighboursCard neighbour={mockList[0]} />);

      const deleteButton = screen.getByRole("button", { name: buttonText });
      await userEvent.click(deleteButton);

      const feedback = screen.getByText(feedbackSuccess);

      expect(feedback).toBeInTheDocument();
    });

    test("Then the promise is rejected and it should show a feedback message with 'Disculpa, no hemos podido eliminar al vecino'", async () => {
      server.use(...errorHandlers);

      const feedbackError = "Disculpa, no hemos podido eliminar al vecino";
      customRender(<NeighboursCard neighbour={mockList[0]} />);

      const deleteButton = screen.getByRole("button", {
        name: buttonText,
      });
      await userEvent.click(deleteButton);

      const errorMessage = screen.getByText(feedbackError);

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("When it receives a click on the 'Detalle' button from 'Marta Ibarra Chef' card", () => {
    test("Then it should show the 'Marta Ibarra Chef' detail page heading", async () => {
      const expectedHeadingText = "Marta Ibarra Chef";
      const button = "Detalle";
      const mockNeighbour = mockMartaNeighbour;

      customRender(<NeighboursCard neighbour={mockNeighbour} />);

      const detailLink = screen.getByRole("link", { name: button });
      await userEvent.click(detailLink);

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
