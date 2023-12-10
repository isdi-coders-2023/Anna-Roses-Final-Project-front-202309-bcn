import { renderHook } from "@testing-library/react";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import { mockNeighbours } from "../../mocks/mockNeighbours";

describe("Given a useNeighboursApi custom hook", () => {
  describe("When it calls its addNewNeighbourToApi method with 'Ana Lambea Andorrana'", () => {
    test("Then it should return 'Ana Lambea Andorrana' from the API", async () => {
      const expectedNeighbour = mockNeighbours[2];
      const neighbourId = "65636423c4ddfcae99f020d3";

      const {
        result: {
          current: { loadSelectedNeighbour },
        },
      } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

      const response = await loadSelectedNeighbour(neighbourId);

      expect(response).toStrictEqual(expectedNeighbour);
    });
  });
});
