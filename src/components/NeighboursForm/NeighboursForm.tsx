import Button from "../Button/Button";
import NeighboursFormStyled from "./NeighboursFormStyled";

const NeighboursForm = (): React.ReactElement => {
  return (
    <NeighboursFormStyled className="form">
      <div className="form">
        <label htmlFor="name" className="form__label">
          Nombre y apellidos
        </label>
        <input type="text" className="form__input" id="name" required />
        <label htmlFor="floor" className="form__label">
          Piso (nº)
        </label>
        <input
          type="number"
          min={0}
          max={50}
          className="form__input"
          id="floor"
          required
        />
        <label htmlFor="door" className="form__label">
          Puerta (nº o letra)
        </label>
        <input type="text" className="form__input" id="door" required />
        <label htmlFor="coefficient" className="form__label">
          Coeficiente (%)
        </label>
        <input
          type="number"
          min={0}
          max={100}
          className="form__input"
          id="coefficient"
          required
        />
        <label htmlFor="moneyInFavour" className="form__label">
          Dinero a favor (€)
        </label>
        <input
          type="number"
          min={0}
          max={900000}
          className="form__input"
          id="moneyInFavour"
          required
        />
        <label htmlFor="firstOwner" className="form__label">
          Propietario 1 (nombre y apellidos)
        </label>
        <input type="text" className="form__input" id="firstOwner" required />
        <label htmlFor="secondOwner" className="form__label">
          Propietario 2 (nombre y apellidos) - (opcional)
        </label>
        <input type="text" className="form__input" id="secondOwner" />
        <label htmlFor="powers" className="form__label">
          Poderes
        </label>
        <select className="form__input form__select" id="powers" required>
          <option value="" className="form__select--input">
            Seleccionar
          </option>
          <option value="property" className="form__select--input">
            Propietario
          </option>
          <option value="administrator" className="form__select--input">
            Administrador
          </option>
          <option value="tenant" className="form__select--input">
            Inquilino
          </option>
        </select>
        <label htmlFor="activityKind" className="form__label">
          Tipo de actividad
        </label>
        <select className="form__input form__select" id="activityKind" required>
          <option value="" className="form__select--input">
            Seleccionar
          </option>
          <option value="livingPlace" className="form__select--input">
            Vivienda
          </option>
          <option value="rent" className="form__select--input">
            Alquiler
          </option>
          <option value="business" className="form__select--input">
            Negocio
          </option>
          <option value="restaurant" className="form__select--input">
            Restaurante
          </option>
          <option value="office" className="form__select--input">
            Oficina
          </option>
        </select>
        <label htmlFor="isFirstResidence" className="form__label">
          Es la primera vivienda?
        </label>
        <select
          className="form__input form__select"
          id="isFirstResidence"
          required
        >
          <option value="" className="form__select--input">
            Seleccionar
          </option>
          <option value="yes" className="form__select--input">
            Si
          </option>
          <option value="no" className="form__select--input">
            No
          </option>
        </select>
        <label htmlFor="isRented" className="form__label">
          Se alquila?
        </label>
        <select className="form__input form__select" id="isRented" required>
          <option value="" className="form__select--input">
            Seleccionar
          </option>
          <option value="yes" className="form__select--input">
            Si
          </option>
          <option value="no" className="form__select--input">
            No
          </option>
        </select>
        <label htmlFor="numberOfResidents" className="form__label">
          Número de residentes (nº)
        </label>
        <input
          type="number"
          min={0}
          max={10}
          className="form__input"
          id="numberOfResidents"
          required
        />
        <label htmlFor="yearOfPurchase" className="form__label">
          Fecha de adquisición
        </label>
        <input
          type="date"
          className="form__input"
          id="yearOfPurchase"
          min="1900-1-1"
          required
        />
        <label htmlFor="pictureUrl" className="form__label">
          Foto URL
        </label>
        <input type="url" className="form__input" id="pictureUrl" required />
        <label htmlFor="coment" className="form__label">
          Comentarios (opcional)
        </label>
        <textarea className="form__input" id="coment" required />
        <div className="form__label form__button">
          <Button buttonText="Añadir" />
        </div>
      </div>
    </NeighboursFormStyled>
  );
};

export default NeighboursForm;
