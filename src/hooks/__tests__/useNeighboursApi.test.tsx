import { renderHook } from "@testing-library/react";
import mockNeighbours from "../../mocks/mockNeighbours";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";

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

  describe("When it calls its deleteNeighbour method with a neighbourId", () => {
    test("Then it should delete 'Marta Ibarra Chef'", async () => {
      const expectedNeighbourId = mockNeighbours[0]._id;
      const expectedResponse = {};

      const {
        result: {
          current: { deleteNeighbourFromApi },
        },
      } = renderHook(() => useNeighboursApi(), {
        wrapper: providerWrapper,
      });

      const response = await deleteNeighbourFromApi(expectedNeighbourId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
