import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
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
      toast.error("Disculpa, no hemos podido cargar los vecinos", {
        className: "toast toast--error",
      });

      dispatch(hideLoadingactionCreator());
    }
  }, [dispatch]);

  const deleteNeighbourFromApi = useCallback(
    async (neighbourId: string): Promise<void> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/neighbours/${neighbourId}`);
        toast.success("Hemos eliminado el vecino!", {
          className: "toast toast--success",
        });

        dispatch(hideLoadingactionCreator());

        return data;
      } catch {
        dispatch(hideLoadingactionCreator());

        toast.error("Disculpa, no hemos podido eliminar el vecino", {
          className: "toast toast--error",
        });
      }
    },
    [dispatch],
  );

  return { getNeighboursApi, deleteNeighbourFromApi };
};

export default useNeighboursApi;
