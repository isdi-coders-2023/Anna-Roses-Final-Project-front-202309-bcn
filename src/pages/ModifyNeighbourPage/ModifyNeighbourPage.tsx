import { useParams } from "react-router-dom";
import NeighboursForm from "../../components/NeighboursForm/NeighboursForm";
import useNeighboursApi from "../../hooks/useNeighboursApi";
import {
  loadSelectedNeighbourActionCreator,
  modifyNeihbourActionCreator,
} from "../../store/features/neighbours/neighboursSlice";
import {
  NeighbourStructure,
  NeighbourWithoutId,
} from "../../store/features/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import PageStyled from "../../styles/shared/PageStyled/PageStyled";
import TitleStyled from "../../styles/shared/TitleStyled/TitleStyled";
import { useCallback, useEffect } from "react";

const ModifyNeighbourPage = (): React.ReactElement => {
  const { neighbourId } = useParams();
  const dispatch = useAppDispatch();
  const { modifyNeighbour, loadSelectedNeighbour } = useNeighboursApi();

  const { selectedNeighbour } = useAppSelector(
    (state) => state.neighboursState,
  );

  useEffect(() => {
    (async () => {
      const selectedNeighbour = await loadSelectedNeighbour(
        neighbourId as string,
      );

      dispatch(
        loadSelectedNeighbourActionCreator(
          selectedNeighbour as NeighbourStructure,
        ),
      );
    })();
  }, [dispatch, neighbourId, loadSelectedNeighbour]);

  const updateNeighbour = useCallback(
    async (neighbour: NeighbourWithoutId) => {
      const updatedNeighbour = await modifyNeighbour(neighbourId!, neighbour);

      dispatch(modifyNeihbourActionCreator(updatedNeighbour!));
    },
    [dispatch, modifyNeighbour, neighbourId],
  );

  return (
    <PageStyled>
      <TitleStyled className="title">
        Edita la información del vecino
      </TitleStyled>
      <NeighboursForm
        submitAction={updateNeighbour}
        selectedNeighbour={selectedNeighbour}
        buttonText="Modificar"
      />
    </PageStyled>
  );
};

export default ModifyNeighbourPage;
