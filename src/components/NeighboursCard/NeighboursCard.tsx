import { NeighbourStructure } from "../../store/features/types";
import NeighboursCardStyled from "./NeighboursCardStyled";

interface NeighbourCardProps {
  neighbour: NeighbourStructure;
}

const NeighboursCard = ({
  neighbour,
}: NeighbourCardProps): React.ReactElement => {
  return (
    <NeighboursCardStyled className="card">
      <div className="card__image-container">
        <img
          src={neighbour.image}
          alt={neighbour.name}
          width="200"
          height="200"
          className="card__image"
        />
      </div>
      <ul className="card__items">
        <li className="card__item card__name">{neighbour.name}</li>
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
    </NeighboursCardStyled>
  );
};

export default NeighboursCard;
