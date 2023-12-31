import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import {
  NeighbourStructure,
  NeighbourWithoutId,
  NeighboursStateStructure,
} from "../store/features/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useNeighboursApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getNeighbours = useCallback(async (): Promise<
    NeighboursStateStructure | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const { data: neighbours } = await axios.get<{
        neighbours: NeighbourStructure[];
        selectedNeighbour: NeighbourStructure;
      }>("/neighbours");

      dispatch(hideLoadingActionCreator());

      return neighbours;
    } catch {
      toast.error("Disculpa, no hemos podido cargar los vecinos", {
        className: "toast toast--error",
      });

      dispatch(hideLoadingActionCreator());
    }
  }, [dispatch]);

  const deleteNeighbour = useCallback(
    async (id: string): Promise<void> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/neighbours/${id}`);
        toast.success("Hemos eliminado al vecino!", {
          className: "toast toast--success",
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Disculpa, no hemos podido eliminar al vecino", {
          className: "toast toast--error",
        });
      }
    },
    [dispatch],
  );

  const addNeighbour = useCallback(
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

        dispatch(hideLoadingActionCreator());
        navigate("/home");

        toast.success("Hemos añadido al nuevo vecino", {
          className: "toast toast--success",
        });

        return neighbour;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error(
          "No hemos podido añadir al nuevo vecino, vuelve a intentarlo",
          {
            className: "toast toast--error",
          },
        );
      }
    },
    [dispatch, navigate],
  );

  const loadSelectedNeighbour = useCallback(
    async (id: string): Promise<NeighbourStructure | void> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { neighbour },
        } = await axios.get<{ neighbour: NeighbourStructure }>(
          `/neighbours/${id}`,
        );

        dispatch(hideLoadingActionCreator());

        return neighbour;
      } catch {
        toast.error("Disculpa, no hemos podido cargar al vecino", {
          className: "toast toast--error",
        });
      }
    },
    [dispatch],
  );

  const modifyNeighbour = useCallback(
    async (
      id: string,
      modifiedNeighbour: NeighbourWithoutId,
    ): Promise<NeighbourStructure | void> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { neighbour },
        } = await axios.patch<{ neighbour: NeighbourStructure }>(
          `/neighbours/${id}`,
          modifiedNeighbour,
        );

        dispatch(hideLoadingActionCreator());

        toast.success("Hemos modificado al nuevo vecino", {
          className: "toast toast--success",
        });

        navigate("/home");

        return neighbour;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error(
          "Disculpa, no hemos podido modificar al vecino, vuelve a intentarlo",
          {
            className: "toast toast--error",
          },
        );
      }
    },
    [dispatch, navigate],
  );

  return {
    getNeighboursApi: getNeighbours,
    deleteNeighbourFromApi: deleteNeighbour,
    addNeighbourToApi: addNeighbour,
    loadSelectedNeighbour,
    modifyNeighbour,
  };
};

export default useNeighboursApi;
