import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import ListStyled from "./ListStyled";

const List = (): React.ReactElement => {
  const neighbours = useAppSelector(
    (state) => state.neighboursState.neighbours,
  );

  return (
    <ListStyled>
      <ul className="cards">
        {neighbours.map((neighbour) => (
          <li className="card" key={neighbour._id}>
            <Card neighbour={neighbour} />
          </li>
        ))}
      </ul>
    </ListStyled>
  );
};

export default List;
