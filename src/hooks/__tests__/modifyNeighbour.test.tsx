import { renderHook, screen } from "@testing-library/react";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";
import { mockNeighboursModified } from "../../mocks/mockNeighbours";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a useNeighboursApi custom hook", () => {
  const path = "/neighbours/6563639cc4ddfcae99eeb07a";

  const spyScrollTo = vi.fn();
  Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });
  const mockModifiedNeighbours = mockNeighboursModified;
  const mockModifiedNeighbour = mockModifiedNeighbours[0];

  const {
    result: {
      current: { modifyNeighbour },
    },
  } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

  describe("When it is called with its modifyNieghbour function with 'Marta Ibarra Chef'", () => {
    test("Then it should show the modified neighbour", async () => {
      const response = await modifyNeighbour(
        mockNeighboursModified[0]._id,
        mockNeighboursModified[0],
      );

      expect(response).toStrictEqual(mockModifiedNeighbours[0]);
    });
  });

  describe("When it is called with its modifyNieghbour function with 'Marta Ibarra Chef' and the response fails", () => {
    test("Then it should show the text 'Disculpa, no hemos podido modificar al vecino, vuelve a intentarlo' as a feedback message", async () => {
      server.use(...errorHandlers);

      const expectedNeighbourId = mockNeighboursModified[0]._id;
      const feedbackMessage =
        "Disculpa, no hemos podido modificar al vecino, vuelve a intentarlo";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      await modifyNeighbour(expectedNeighbourId, mockModifiedNeighbour);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
