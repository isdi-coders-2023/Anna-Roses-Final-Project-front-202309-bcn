import { renderHook, screen } from "@testing-library/react";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import { mockAnaNeighbour, mockNeighbours } from "../../mocks/mockNeighbours";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a useNeighboursApi custom hook", () => {
  const expectedNeighbour = mockNeighbours[2];

  const {
    result: {
      current: { loadSelectedNeighbour },
    },
  } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

  describe("When it calls its loadSelectedNeighbour method with 'Ana Lambea Andorrana'", () => {
    test("Then it should return 'Ana Lambea Andorrana' from the API", async () => {
      const neighbourId = "6570c0bab38c03592160a94e";

      const response = await loadSelectedNeighbour(neighbourId);

      expect(response).toStrictEqual(expectedNeighbour);
    });
  });

  describe("When it is called with its loadSelectedNeighbour method with '65636423c4ddfcae99f020d3error'", () => {
    test("Then it should return 'Ana Lambea Andorrana' from the API", async () => {
      server.use(...errorHandlers);

      const neighbourId = mockAnaNeighbour._id;
      const feedbackMessage = "Disculpa, no hemos podido cargar al vecino";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["neighbours/6570c0bab38c03592160a94e"]}>
          <App />
        </MemoryRouter>,
      );

      await loadSelectedNeighbour(neighbourId);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
