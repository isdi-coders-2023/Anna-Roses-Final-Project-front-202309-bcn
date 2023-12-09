import NeighboursForm from "../../components/NeighboursForm/NeighboursForm";
import useNeighboursApi from "../../hooks/useNeighboursApi";
import PageStyled from "../../styles/shared/PageStyled/PageStyled";
import TitleStyled from "../../styles/shared/TitleStyled/TitleStyled";

const CreateNeighbourPage = (): React.ReactElement => {
  const { addNeighbourToApi } = useNeighboursApi();

  return (
    <PageStyled>
      <TitleStyled className="title">Añade un vecino</TitleStyled>
      <NeighboursForm submitAction={addNeighbourToApi} />
    </PageStyled>
  );
};

export default CreateNeighbourPage;
