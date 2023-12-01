import HomePageStyled from "./HomePageStyled";
import { loadNeighboursActioncreator } from "../../store/features/neighbours/neighboursSlice";
import List from "../../components/List/List";
import { useAppDispatch } from "../../store/hooks";
import mockData from "../../Data/NeighboursData/NeighboursData";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const currentNeighbours = mockData;
  dispatch(loadNeighboursActioncreator(currentNeighbours));

  return (
    <HomePageStyled>
      <h1 className="title">Administra tu comunidad</h1>
      <List />
    </HomePageStyled>
  );
};

export default HomePage;
