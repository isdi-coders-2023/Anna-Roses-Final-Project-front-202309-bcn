import { screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import NeighboursForm from "./NeighboursForm";
import userEvent from "@testing-library/user-event";

describe("Given a NeighboursForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with a 'Nombre y apellidos' text label", () => {
      const expectedLabelText = "Nombre y apellidos";

      customRender(<NeighboursForm />);
      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Añadir'", () => {
      const expectedButtonText = "Añadir";

      customRender(<NeighboursForm />);
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user fills all the input fields", () => {
    test("Then it should sho the written text in the fields", async () => {
      const expectedInputText = "Marta Ibarra Chef";
      const label = "Nombre y apellidos";

      customRender(<NeighboursForm />);
      const labelText = screen.getByLabelText(label);
      await userEvent.type(labelText, expectedInputText);
      const inputText = screen.getByDisplayValue(expectedInputText);

      await waitFor(() => expect(inputText));
    });
  });
});
