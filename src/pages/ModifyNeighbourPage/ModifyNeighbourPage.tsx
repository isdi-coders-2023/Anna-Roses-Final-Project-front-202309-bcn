import NeighboursForm from "../../components/NeighboursForm/NeighboursForm";
import useNeighboursApi from "../../hooks/useNeighboursApi";
import { modifyNeihbourActionCreator } from "../../store/features/neighbours/neighboursSlice";
import { NeighbourWithoutId } from "../../store/features/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import PageStyled from "../../styles/shared/PageStyled/PageStyled";
import TitleStyled from "../../styles/shared/TitleStyled/TitleStyled";

const ModifyNeighbourPage = (): React.ReactElement => {
  const { modifyNeighbour } = useNeighboursApi();

  const { selectedNeighbour } = useAppSelector(
    (state) => state.neighboursState,
  );
  const dispatch = useAppDispatch();

  const updateNeighbour = async (neighbour: NeighbourWithoutId) => {
    const updatedNeighbour = await modifyNeighbour(
      selectedNeighbour._id,
      neighbour,
    );

    dispatch(modifyNeihbourActionCreator(updatedNeighbour!));
  };

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
