import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import NeighbourDetailPage from "./NeighbourDetailPage";

describe("Given a  NeighbourDetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a neighbour with the text 'Piso:'", () => {
      const expectedText = "Piso:";

      customRender(<NeighbourDetailPage />);
      const favouriteText = screen.getByText(expectedText);

      expect(favouriteText).toBeInTheDocument();
    });
  });
});
