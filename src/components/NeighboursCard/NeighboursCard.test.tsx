import { screen, waitFor } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import NeighboursCard from "./NeighboursCard";
import { customRender } from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";

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

    test("Then it should show a feedback message with 'Hemos eliminado el vecino!'", async () => {
      const feedbackSuccess = "Hemos eliminado el vecino!";
      customRender(<NeighboursCard neighbour={mockList[0]} />);

      const deleteButton = screen.getByRole("button", { name: buttonText });
      await userEvent.click(deleteButton);

      expect(screen.getByText(feedbackSuccess)).toBeInTheDocument();
    });

    test("Then the promise is rejected and it should show a feedback message with 'Disculpa, no hemos podido eliminar el vecino'", async () => {
      server.use(...errorHandlers);
      const feedbackError = "Disculpa, no hemos podido eliminar el vecino";
      customRender(<NeighboursCard neighbour={mockList[0]} />);

      const deleteButton = screen.getByRole("button", {
        name: buttonText,
      });
      await userEvent.click(deleteButton);

      expect(screen.getByText(feedbackError)).toBeInTheDocument();
    });
  });
});
