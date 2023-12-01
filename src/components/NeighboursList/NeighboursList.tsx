import { useAppSelector } from "../../store/hooks";
import NeighboursCard from "../NeighboursCard/NeighboursCard";
import NeighboursListStyled from "./NeighboursListStyled";

const NeighboursList = (): React.ReactElement => {
  const neighbours = useAppSelector(
    (state) => state.neighboursState.neighbours,
  );

  return (
    <NeighboursListStyled className="cards">
      {neighbours.map((neighbour) => (
        <li className="card" key={neighbour._id}>
          <NeighboursCard neighbour={neighbour} />
        </li>
      ))}
    </NeighboursListStyled>
  );
};

export default NeighboursList;
