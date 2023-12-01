import { NeighbourStructure } from "../../store/features/types";
import CardStyled from "./CardStyled";

interface NeighbourCardProps {
  neighbour: NeighbourStructure;
}

const Card = ({ neighbour }: NeighbourCardProps): React.ReactElement => {
  return (
    <CardStyled className="card">
      <div className="card__image">
        <img
          src={neighbour.image}
          alt={neighbour.name}
          width="200"
          height="200"
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
      </ul>
    </CardStyled>
  );
};

export default Card;
