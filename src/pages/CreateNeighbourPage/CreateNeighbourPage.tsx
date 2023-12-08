import NeighboursForm from "../../components/NeighboursForm/NeighboursForm";
import useNeighboursApi from "../../hooks/useNeighboursApi";
import { NeighbourStructure } from "../../store/features/types";
import PageStyled from "../../styles/shared/PageStyled/PageStyled";
import TitleStyled from "../../styles/shared/TitleStyled/TitleStyled";

const CreateNeighbourPage = (): React.ReactElement => {
  const { addNeighbourToApi } = useNeighboursApi();

  const addCurrentNeighbour = (newNeighbour: NeighbourStructure) => {
    addNeighbourToApi(newNeighbour);
  };

  return (
    <PageStyled>
      <TitleStyled className="title">Añade un vecino</TitleStyled>
      <NeighboursForm submitAction={addCurrentNeighbour} />
    </PageStyled>
  );
};

export default CreateNeighbourPage;
