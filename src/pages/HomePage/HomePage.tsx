import PageStyled from "../../styles/shared/PageStyled/PageStyled";
import { useEffect } from "react";
import { loadNeighboursActionCreator } from "../../store/features/neighbours/neighboursSlice";
import NeighboursList from "../../components/NeighboursList/NeighboursList";
import { useAppDispatch } from "../../store/hooks";
import useNeighboursApi from "../../hooks/useNeighboursApi";
import TitleStyled from "../../styles/shared/TitleStyled/TitleStyled";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNeighboursApi } = useNeighboursApi();

  useEffect(() => {
    (async () => {
      const neighbours = await getNeighboursApi();

      if (neighbours) {
        dispatch(loadNeighboursActionCreator(neighbours.neighbours));
      }
    })();
  }, [dispatch, getNeighboursApi]);

  return (
    <PageStyled>
      <TitleStyled className="title">Administra tu comunidad</TitleStyled>
      <NeighboursList />
    </PageStyled>
  );
};

export default HomePage;
