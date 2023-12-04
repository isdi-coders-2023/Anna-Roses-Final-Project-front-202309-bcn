import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import {
  NeighbourStructure,
  NeighboursStateStructure,
} from "../store/features/types";
import {
  hideLoadingactionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useNeighboursApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getNeighboursApi = useCallback(async (): Promise<
    NeighboursStateStructure | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const { data: neighbours } = await axios.get<{
        neighbours: NeighbourStructure[];
      }>("/neighbours");

      dispatch(hideLoadingactionCreator());

      return neighbours;
    } catch {
      navigate("/error-page");

      dispatch(hideLoadingactionCreator());
    }
  }, [dispatch, navigate]);

  return { getNeighboursApi };
};

export default useNeighboursApi;
