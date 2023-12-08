import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import NeighboursForm from "./NeighboursForm";
import userEvent from "@testing-library/user-event";

describe("Given a NeighboursForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a form with a 'Nombre y apellidos' text label", () => {
      const expectedLabelText = "Nombre y apellidos";

      customRender(<NeighboursForm submitAction={actionOnClick} />);
      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Añadir'", () => {
      const expectedButtonText = "Añadir";

      customRender(<NeighboursForm submitAction={actionOnClick} />);
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user fills 'Marta Chef' in the input 'Nombre y apellidos' field", () => {
    test("Then it should show the written text in the form control", async () => {
      const expectedInputText = "Marta Chef";
      const label = "Nombre y apellidos";

      customRender(<NeighboursForm submitAction={actionOnClick} />);

      const inputText = screen.getByRole("textbox", { name: label });
      await userEvent.type(inputText, expectedInputText);

      expect(inputText).toHaveValue(expectedInputText);
    });
  });

  describe("When a user clicks on the 'Añadir' button to create a new Neighbour", () => {
    test("Then it should call its onSubmit action", () => {
      const label = "Nombre y apellidos";

      customRender(<NeighboursForm submitAction={actionOnClick} />);
      const neighbourForm = screen.getByLabelText(label);
      fireEvent.submit(neighbourForm);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
