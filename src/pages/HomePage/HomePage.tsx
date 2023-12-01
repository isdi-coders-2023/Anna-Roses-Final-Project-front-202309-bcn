import HomePageStyled from "./HomePageStyled";
import { loadNeighboursActioncreator } from "../../store/features/neighbours/neighboursSlice";
import NeighboursList from "../../components/NeighboursList/NeighboursList";
import { useAppDispatch } from "../../store/hooks";
import neighboursData from "../../data/neighboursData/neighboursData";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const currentNeighbours = neighboursData;
  dispatch(loadNeighboursActioncreator(currentNeighbours));

  return (
    <HomePageStyled>
      <h1 className="title">Administra tu comunidad</h1>
      <NeighboursList />
    </HomePageStyled>
  );
};

export default HomePage;
