import { renderHook } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customRender";

describe("Given a useNeighboursApi custom hook", () => {
  describe("When it renders the information of 'Marta Ibarra Chef' and 'Laura Guitérrez Empoderada'", () => {
    test("Then it should show the information of 'Marta Ibarra Chef' and 'Laura Guitérrez Empoderada'", async () => {
      const expectedNeighbours = mockNeighbours;

      const {
        result: {
          current: { getNeighboursApi },
        },
      } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

      const currentNeighbours = await getNeighboursApi();

      expect(currentNeighbours).toStrictEqual(expectedNeighbours);
    });
  });
});
