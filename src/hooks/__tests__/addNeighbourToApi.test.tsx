import { renderHook } from "@testing-library/react";
import { mockNeighbours } from "../../mocks/mockNeighbours";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";

describe("Given a useNeighboursApi custom hook", () => {
  describe("When it calls its addNewNeighbourToApi method with 'Ana Lambea Andorrana'", () => {
    test("Then it should return 'Ana Lambea Andorrana' from the API", async () => {
      const neighboursList = mockNeighbours;

      const {
        result: {
          current: { addNeighbourToApi },
        },
      } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

      const newNeighbour = neighboursList[2];

      const response = await addNeighbourToApi(newNeighbour);

      expect(response).toStrictEqual(newNeighbour);
    });
  });
});
