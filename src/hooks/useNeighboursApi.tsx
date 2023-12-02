import axios from "axios";
import { useCallback } from "react";
import { NeighbourStructure } from "../store/features/types";

const useNeighboursApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getNeighboursApi = useCallback(async () => {
    const { data: neighbours } = await axios.get<{
      neighbours: NeighbourStructure[];
    }>("/neighbours");

    return neighbours;
  }, []);

  return { getNeighboursApi };
};

export default useNeighboursApi;
