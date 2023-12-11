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

  const {
    result: {
      current: { modifyNeighbour },
    },
  } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

  describe("When it is called with its modifyNieghbour function with 'Marta Ibarra Chef'", () => {
    test("Then it should show the text 'Hemos modificado al nuevo vecino' as a feedback message", async () => {
      const mockModifiedNeighbours = mockNeighboursModified;
      const modifiedNeighbourId = mockModifiedNeighbours[0]._id;

      const response = await modifyNeighbour(modifiedNeighbourId);

      expect(response).toStrictEqual(mockModifiedNeighbours);
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

      await modifyNeighbour(expectedNeighbourId);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
