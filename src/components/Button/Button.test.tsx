import { screen } from "@testing-library/react";
import Button from "./Button";
import { customRender } from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show", () => {
      const buttonText = "Eliminar";

      customRender(<Button buttonText={buttonText} />);
      const text = screen.getByRole("button", { name: buttonText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it receives the action delete and a click from a user", () => {
    test("Then it should call the received function", async () => {
      const buttonText = "Eliminar";
      const deleteActionMock = vi.fn();

      customRender(
        <Button buttonText={buttonText} actionOnClick={deleteActionMock} />,
      );
      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      expect(deleteActionMock).toHaveBeenCalledOnce();
    });
  });
});
