import { useDispatch } from "react-redux";
import HomePageStyled from "./HomePageStyled";
import mockNeighbours from "../../testUtils/mockNeighbours";
import { loadNeighboursActioncreator } from "../../store/features/neighbours/neighboursSlice";

const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const currentNeighbours = mockNeighbours;
  dispatch(loadNeighboursActioncreator(currentNeighbours));

  return (
    <HomePageStyled>
      <h1 className="title">Administra tu comunidad</h1>
    </HomePageStyled>
  );
};

export default HomePage;
