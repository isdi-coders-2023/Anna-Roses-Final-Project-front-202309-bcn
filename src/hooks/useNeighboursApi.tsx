import axios from "axios";
import { useCallback } from "react";
import { NeighbourStructure } from "../store/features/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingactionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useNeighboursApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getNeighboursApi = useCallback(async () => {
    dispatch(showLoadingActionCreator());

    const { data: neighbours } = await axios.get<{
      neighbours: NeighbourStructure[];
    }>("/neighbours");

    dispatch(hideLoadingactionCreator());

    return neighbours;
  }, [dispatch]);

  return { getNeighboursApi };
};

export default useNeighboursApi;
