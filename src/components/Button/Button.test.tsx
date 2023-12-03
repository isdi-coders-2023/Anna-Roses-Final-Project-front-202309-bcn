import { screen } from "@testing-library/react";
import Button from "./Button";
import mockNeighbours from "../../mocks/mockNeighbours";
import { customRender } from "../../testUtils/customRender";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show", () => {
      const buttonText = "Eliminar";
      const mockList = mockNeighbours;

      customRender(<Button buttonText={buttonText} />, mockList);
      const text = screen.getByRole("button", { name: buttonText });

      expect(text).toBeInTheDocument();
    });
  });
});
