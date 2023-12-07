import useNeighboursApi from "../../hooks/useNeighboursApi";
import {
  deleteNeighbourActionCreator,
  loadNeighboursActionCreator,
} from "../../store/features/neighbours/neighboursSlice";
import { NeighbourStructure } from "../../store/features/types";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import NeighboursCardStyled from "./NeighboursCardStyled";

interface NeighbourCardProps {
  neighbour: NeighbourStructure;
}

const NeighboursCard = ({
  neighbour,
}: NeighbourCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNeighboursApi, deleteNeighbourFromApi } = useNeighboursApi();

  const deleteNeighbourById = async (neighbourId: string) => {
    await deleteNeighbourFromApi(neighbourId);
    dispatch(deleteNeighbourActionCreator(neighbourId));

    const neighbours = await getNeighboursApi();

    if (neighbours) {
      dispatch(loadNeighboursActionCreator(neighbours.neighbours));
    }
  };

  return (
    <NeighboursCardStyled className="card">
      <img
        src={neighbour.image}
        alt={neighbour.name}
        width="200"
        height="200"
        className="card__image"
      />
      <h2 className="card__item card__name">{neighbour.name}</h2>
      <ul className="card__items">
        <li className="card__item">
          <span className="card__intro">Piso: </span>
          <span className="card__input">{neighbour.floor}</span>
        </li>
        <li className="card__item">
          <span className="card__intro">Puerta: </span>
          <span className="card__input">{neighbour.door}</span>
        </li>
        <li className="card__item">
          <span className="card__intro">Coeficiente: </span>
          <span className="card__input">{neighbour.coefficient}%</span>
        </li>
        <li className="card__item">
          <span className="card__intro">Dinero a favor: </span>
          <span className="card__input">{neighbour.moneyInFavour}€</span>
        </li>
        <li className="card__item">
          <span className="card__intro">Tipo de actividad: </span>
          <span className="card__input">{neighbour.activityKind}</span>
        </li>
        <li className="card__item">
          <span className="card__intro">Comentarios: </span>
          <span className="card__input">{neighbour.coments}</span>
        </li>
      </ul>
      <div className="card__buttons">
        <Button
          buttonText="Eliminar"
          actionOnClick={() => {
            deleteNeighbourById(neighbour._id);
          }}
        />
      </div>
    </NeighboursCardStyled>
  );
};

export default NeighboursCard;
