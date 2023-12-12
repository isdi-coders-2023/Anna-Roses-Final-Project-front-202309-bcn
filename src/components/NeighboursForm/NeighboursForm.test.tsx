import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import NeighboursForm from "./NeighboursForm";
import userEvent from "@testing-library/user-event";

describe("Given a NeighboursForm component", () => {
  const actionOnClick = vi.fn();
  const addButtonText = "Añadir";

  describe("When it is rendered", () => {
    test("Then it should show a form with a 'Nombre y apellidos' text label", () => {
      const expectedLabelText = "Nombre y apellidos";

      customRender(
        <NeighboursForm
          submitAction={actionOnClick}
          buttonText={addButtonText}
        />,
      );
      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Añadir'", () => {
      customRender(
        <NeighboursForm
          submitAction={actionOnClick}
          buttonText={addButtonText}
        />,
      );
      const button = screen.getByRole("button", { name: addButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user fills 'Marta Chef' in the input 'Nombre y apellidos' field", () => {
    test("Then it should show the written text in the form control", async () => {
      const expectedInputText = "Marta Chef";
      const label = "Nombre y apellidos";

      customRender(
        <NeighboursForm
          submitAction={actionOnClick}
          buttonText={addButtonText}
        />,
      );

      const inputText = screen.getByRole("textbox", { name: label });
      await userEvent.type(inputText, expectedInputText);

      expect(inputText).toHaveValue(expectedInputText);
    });
  });

  describe("When a user clicks on the 'Añadir' button to create a new Neighbour", () => {
    test("Then it should call its onSubmit action", () => {
      const label = "Nombre y apellidos";

      customRender(
        <NeighboursForm
          submitAction={actionOnClick}
          buttonText={addButtonText}
        />,
      );
      const neighbourForm = screen.getByLabelText(label);
      fireEvent.submit(neighbourForm);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When the user fills the inputs of the form with a new neighbour information", () => {
    test("Then it should call its submitAction function'", async () => {
      const stringLabelText = [
        "Nombre y apellidos",
        "Piso (nº)",
        "Puerta (nº o letra)",
        "Propietario 1 (nombre y apellidos)",
        "Propietario 2 (nombre y apellidos)",
        "Poderes",
        "Tipo de actividad",
        "Es la primera vivienda?",
        "Se alquila?",
        "Comentarios",
        "Foto URL",
      ];
      const stringInput = "http://cosetes.com";
      const numberLabelText = [
        "Coeficiente (%)",
        "Dinero a favor (€)",
        "Número de residentes (nº)",
      ];
      const numberInput = 3;
      const dateLabelText = ["Fecha de adquisición"];
      const dateInput = "2022-01-01";

      customRender(
        <NeighboursForm
          submitAction={actionOnClick}
          buttonText={addButtonText}
        />,
      );

      for (const labelText of stringLabelText) {
        const inputElement = screen.getByLabelText(labelText);
        await userEvent.type(inputElement, stringInput);
      }

      for (const labelText of numberLabelText) {
        const inputElement = screen.getByLabelText(labelText);
        await userEvent.type(inputElement, numberInput.toString());
      }

      for (const labelText of dateLabelText) {
        const inputElement = screen.getByLabelText(labelText);
        await userEvent.type(inputElement, dateInput);
      }

      const addButton = screen.getByRole("button", { name: addButtonText });
      await userEvent.click(addButton);

      await expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
