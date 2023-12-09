import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "../store/hooks";
import {
  NeighbourStructure,
  NeighbourWithoutId,
  NeighboursStateStructure,
} from "../store/features/types";
import {
  hideLoadingactionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { useNavigate } from "react-router-dom";

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

  const addNeighbourToApi = useCallback(
    async (
      newNeighbour: NeighbourWithoutId,
    ): Promise<NeighbourStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { neighbour },
        } = await axios.post<{ neighbour: NeighbourStructure }>(
          "/neighbours/create",
          newNeighbour,
        );

        dispatch(hideLoadingactionCreator());
        navigate("/home");

        toast.success("Hemos añadido el nuevo vecino", {
          className: "toast toast--success",
        });

        return neighbour;
      } catch (error) {
        dispatch(hideLoadingactionCreator());

        toast.error(
          "No hemos podido añadir el nuevo vecino, inténtalo de nuevo",
          {
            className: "toast toast--error",
          },
        );
      }
    },
    [dispatch, navigate],
  );

  return {
    getNeighboursApi,
    deleteNeighbourFromApi,
    addNeighbourToApi,
  };
};

export default useNeighboursApi;
