import { renderHook } from "@testing-library/react";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import { mockNeighbours } from "../../mocks/mockNeighbours";

describe("Given a useNeighboursApi custom hook", () => {
  describe("When it calls its deleteNeighbour function with a neighbourId", () => {
    test("Then it should delete 'Marta Ibarra Chef'", async () => {
      const neighboursList = mockNeighbours;

      const {
        result: {
          current: { deleteNeighbourFromApi },
        },
      } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

      const expectedNeighbourId = neighboursList[0]._id;
      const expectedResponse = {};

      const response = await deleteNeighbourFromApi(expectedNeighbourId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
