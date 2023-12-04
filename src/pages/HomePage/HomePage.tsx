import HomePageStyled from "./HomePageStyled";
import { useEffect } from "react";
import { loadNeighboursActionCreator } from "../../store/features/neighbours/neighboursSlice";
import NeighboursList from "../../components/NeighboursList/NeighboursList";
import { useAppDispatch } from "../../store/hooks";
import useNeighboursApi from "../../hooks/useNeighboursApi";

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
    <HomePageStyled>
      <h1 className="title">Administra tu comunidad</h1>
      <NeighboursList />
    </HomePageStyled>
  );
};

export default HomePage;
