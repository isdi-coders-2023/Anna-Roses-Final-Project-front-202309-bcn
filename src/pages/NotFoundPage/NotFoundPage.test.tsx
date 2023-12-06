import { screen } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import { customRender } from "../../testUtils/customRender";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'minion in alarm mode'", () => {
      const expectedAltText = "minion in alarm mode";
      const mockList = mockNeighbours;

      customRender(<NotFoundPage />, mockList);
      const pageNotFoundImage = screen.getByAltText(expectedAltText);

      expect(pageNotFoundImage).toBeInTheDocument();
    });
  });
});
