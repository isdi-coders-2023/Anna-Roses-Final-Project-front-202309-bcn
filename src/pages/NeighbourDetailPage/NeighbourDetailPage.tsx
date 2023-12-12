import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useNeighboursApi from "../../hooks/useNeighboursApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadSelectedNeighbourActionCreator } from "../../store/features/neighbours/neighboursSlice";
import { NeighbourStructure } from "../../store/features/types";
import PageStyled from "../../styles/shared/PageStyled/PageStyled";
import NeighbourDetailPageStyled from "./NeighbourDetailPageStyled";
import TitleStyled from "../../styles/shared/TitleStyled/TitleStyled";

const NeighbourDetailPage = (): React.ReactElement => {
  const { neighbourId } = useParams();
  const dispatch = useAppDispatch();
  const { loadSelectedNeighbour } = useNeighboursApi();
  const neighbour = useAppSelector(
    (state) => state.neighboursState.selectedNeighbour,
  );

  useEffect(() => {
    (async () => {
      const selectedNeighbour = await loadSelectedNeighbour(
        neighbourId as string,
      );

      dispatch(
        loadSelectedNeighbourActionCreator(
          selectedNeighbour as NeighbourStructure,
        ),
      );
    })();
  }, [dispatch, neighbourId, loadSelectedNeighbour]);

  return (
    <PageStyled>
      <NeighbourDetailPageStyled className="detail">
        <div className="detail__container">
          <TitleStyled className="detail__title">
            Información del vecino
          </TitleStyled>
          <div className="detail__image-container">
            <img
              src={neighbour.image}
              alt={neighbour.name}
              width="300"
              height="300"
              className="detail__image"
            />
          </div>
          <h2 className="detail__item detail__name">{neighbour.name}</h2>
          <div className="detail__items">
            <div className="detail__item">
              <span className="detail__desc">Piso: </span>
              <span className="detail__info">{neighbour.floor}</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Puerta: </span>
              <span className="detail__info">{neighbour.door}</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Coeficiente: </span>
              <span className="detail__info">{neighbour.coefficient}%</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Dinero a favor: </span>
              <span className="detail__info">{neighbour.moneyInFavour}€</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Propietario/s: </span>
              <span className="detail__info">
                {neighbour.firstOwner}
                <br />
                {neighbour.secondOwner}
              </span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Proderes: </span>
              <span className="detail__info">{neighbour.powers}</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Actividad: </span>
              <span className="detail__info">{neighbour.activityKind}</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">1ª vivienda: </span>
              <span className="detail__info">{neighbour.firstResidence}</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">De alquiler: </span>
              <span className="detail__info">{neighbour.rented}</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Nº residentes: </span>
              <span className="detail__info">
                {neighbour.numberOfResidents}
              </span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Año de adquisición: </span>
              <span className="detail__info">{neighbour.yearOfPurchase}</span>
            </div>
            <div className="detail__item">
              <span className="detail__desc">Comentarios: </span>
              <span className="detail__info">{neighbour.coments}</span>
            </div>
          </div>
        </div>
      </NeighbourDetailPageStyled>
    </PageStyled>
  );
};

export default NeighbourDetailPage;
