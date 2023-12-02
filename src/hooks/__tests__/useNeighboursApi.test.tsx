import { renderHook } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import useNeighboursApi from "../useNeighboursApi";

describe("Given a useNeighboursApi custom hook", () => {
  describe("When it information of 'Marta Ibarra Chef' and 'Laura Guitérrez Empoderada'", () => {
    test("Then it should show the information of 'Marta Ibarra Chef' and 'Laura Guitérrez Empoderada'", async () => {
      const expectedNeighbours = mockNeighbours;

      const {
        result: {
          current: { getNeighboursApi },
        },
      } = renderHook(() => useNeighboursApi());

      const currentNeighbours = await getNeighboursApi();

      expect(currentNeighbours).toStrictEqual(expectedNeighbours);
    });
  });
});
