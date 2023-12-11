import { renderHook, screen } from "@testing-library/react";
import { mockAnaNeighbour, mockNeighbours } from "../../mocks/mockNeighbours";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/node";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";

describe("Given a useNeighboursApi custom hook", () => {
  const neighboursList = mockNeighbours;

  const spyScrollTo = vi.fn();
  Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

  const {
    result: {
      current: { addNeighbourToApi },
    },
  } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

  describe("When it calls its addNewNeighbour method with 'Ana Lambea Andorrana'", () => {
    test("Then it should return 'Ana Lambea Andorrana' from the API", async () => {
      const newNeighbour = neighboursList[2];

      const response = await addNeighbourToApi(newNeighbour);

      expect(response).toStrictEqual(newNeighbour);
    });
  });

  describe("When it is called with its addNeighbour function with 'Ana Lambea Andorrana' and the response fails", () => {
    test("Then it should show the text 'No hemos podido añadir el nuevo vecino, inténtalo de nuevo'", async () => {
      server.use(...errorHandlers);
      const path = "/create";
      const errorMessage =
        "No hemos podido añadir al nuevo vecino, vuelve a intentarlo";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      await addNeighbourToApi(mockAnaNeighbour);
      const feedback = await screen.findByText(errorMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
