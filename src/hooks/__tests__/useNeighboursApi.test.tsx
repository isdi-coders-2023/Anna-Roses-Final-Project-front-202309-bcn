import { renderHook } from "@testing-library/react";
import useNeighboursApi from "../useNeighboursApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import { mockNeighbours } from "../../mocks/mockNeighbours";

describe("Given a useNeighboursApi custom hook", () => {
  const neighboursList = mockNeighbours;

  const {
    result: {
      current: { getNeighboursApi, deleteNeighbourFromApi, addNeighbourToApi },
    },
  } = renderHook(() => useNeighboursApi(), { wrapper: providerWrapper });

  describe("When it renders the information of 'Marta Ibarra Chef' and 'Laura Guitérrez Empoderada'", () => {
    test("Then it should show the information of 'Marta Ibarra Chef' and 'Laura Guitérrez Empoderada'", async () => {
      const currentNeighbours = await getNeighboursApi();

      expect(currentNeighbours).toStrictEqual(neighboursList);
    });
  });

  describe("When it calls its deleteNeighbour function with a neighbourId", () => {
    test("Then it should delete 'Marta Ibarra Chef'", async () => {
      const expectedNeighbourId = neighboursList[0]._id;
      const expectedResponse = {};

      const response = await deleteNeighbourFromApi(expectedNeighbourId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When it calls its addNewNeighbourToApi method with 'Ana Lambea Andorrana'", () => {
    test("Then it should return 'Ana Lambea Andorrana' from the API", async () => {
      const newNeighbour = neighboursList[2];

      const response = await addNeighbourToApi(newNeighbour);

      expect(response).toStrictEqual(newNeighbour);
    });
  });
});
