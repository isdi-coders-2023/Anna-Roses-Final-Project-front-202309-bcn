import HomePageStyled from "./HomePageStyled";
import mockNeighbours from "../../testUtils/mockNeighbours";
import { loadNeighboursActioncreator } from "../../store/features/neighbours/neighboursSlice";
import List from "../../components/List/List";
import { useAppDispatch } from "../../store/hooks";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const currentNeighbours = mockNeighbours;
  dispatch(loadNeighboursActioncreator(currentNeighbours));

  return (
    <HomePageStyled>
      <h1 className="title">Administra tu comunidad</h1>
      <List />
    </HomePageStyled>
  );
};

export default HomePage;
