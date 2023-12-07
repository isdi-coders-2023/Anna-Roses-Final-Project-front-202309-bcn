import NeighboursForm from "../../components/NeighboursForm/NeighboursForm";
import PageStyled from "../../styles/shared/PageStyled/PageStyled";
import TitleStyled from "../../styles/shared/TitleStyled/TitleStyled";

const CreateNeighbourPage = (): React.ReactElement => {
  return (
    <PageStyled>
      <TitleStyled className="title">Añade un vecino</TitleStyled>
      <NeighboursForm />
    </PageStyled>
  );
};

export default CreateNeighbourPage;
