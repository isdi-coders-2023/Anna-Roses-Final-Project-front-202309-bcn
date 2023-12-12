import { useState } from "react";
import {
  NeighbourStructure,
  NeighbourWithoutId,
} from "../../store/features/types";
import Button from "../Button/Button";
import NeighboursFormStyled from "./NeighboursFormStyled";

interface NeighbourFormProps {
  submitAction: (newNeighbour: NeighbourStructure) => void;
  selectedNeighbour?: NeighbourStructure;
  buttonText: string;
}

const NeighboursForm = ({
  submitAction,
  selectedNeighbour,
  buttonText,
}: NeighbourFormProps): React.ReactElement => {
  let emptyNeighbour: NeighbourWithoutId = {
    name: "",
    floor: "",
    door: "",
    coefficient: 0,
    moneyInFavour: 0,
    firstOwner: "",
    secondOwner: "",
    powers: "",
    activityKind: "",
    firstResidence: "",
    rented: "",
    numberOfResidents: 0,
    yearOfPurchase: "",
    coments: "",
    image: "",
  };

  if (selectedNeighbour) {
    emptyNeighbour = selectedNeighbour;
  }

  const [newNeighbour, setNewNeighbour] =
    useState<NeighbourWithoutId>(emptyNeighbour);

  const onChangeEditNeighbour = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setNewNeighbour((currentNewNeighbour) => ({
      ...currentNewNeighbour,
      [event.target.id]: event.target.value,
    }));
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitAction(newNeighbour as NeighbourStructure);
  };

  return (
    <NeighboursFormStyled>
      <form className="form" onSubmit={onSubmitForm} autoComplete="off">
        <label htmlFor="name" className="form__label">
          Nombre y apellidos
        </label>
        <input
          type="text"
          className="form__input"
          id="name"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.name}
          required
        />
        <label htmlFor="floor" className="form__label">
          Piso (nº)
        </label>
        <input
          type="text"
          min={0}
          max={50}
          className="form__input"
          id="floor"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.floor}
          required
        />
        <label htmlFor="door" className="form__label">
          Puerta (nº o letra)
        </label>
        <input
          type="text"
          className="form__input"
          id="door"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.door}
          required
        />
        <label htmlFor="coefficient" className="form__label">
          Coeficiente (%)
        </label>
        <input
          type="number"
          min={0}
          max={100}
          className="form__input"
          id="coefficient"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.coefficient}
          required
        />
        <label htmlFor="moneyInFavour" className="form__label">
          Dinero a favor (€)
        </label>
        <input
          type="number"
          min={-900000}
          max={900000}
          className="form__input"
          id="moneyInFavour"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.moneyInFavour}
          required
        />
        <label htmlFor="firstOwner" className="form__label">
          Propietario 1 (nombre y apellidos)
        </label>
        <input
          type="text"
          className="form__input"
          id="firstOwner"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.firstOwner}
          required
        />
        <label htmlFor="secondOwner" className="form__label">
          Propietario 2 (nombre y apellidos)
        </label>
        <input
          type="text"
          className="form__input"
          id="secondOwner"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.secondOwner}
        />
        <label htmlFor="powers" className="form__label">
          Poderes
        </label>
        <select
          className="form__input form__select"
          id="powers"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.powers}
          required
        >
          <option value="" className="form__select--input">
            Seleccionar
          </option>
          <option value="Propietario">Propietario</option>
          <option value="Administrador">Administrador</option>
          <option value="Inquilino">Inquilino</option>
        </select>
        <label htmlFor="activityKind" className="form__label">
          Tipo de actividad
        </label>
        <select
          className="form__input form__select"
          id="activityKind"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.activityKind}
          required
        >
          <option value="">Seleccionar</option>
          <option value="Vivienda">Vivienda</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Negocio">Negocio</option>
          <option value="Restaurante">Restaurante</option>
          <option value="Oficina">Oficina</option>
        </select>
        <label htmlFor="firstResidence" className="form__label">
          Es la primera vivienda?
        </label>
        <select
          className="form__input form__select"
          id="firstResidence"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.firstResidence}
          required
        >
          <option value="">Seleccionar</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
          <option value="N/A">N/A</option>
        </select>
        <label htmlFor="rented" className="form__label">
          Se alquila?
        </label>
        <select
          className="form__input form__select"
          id="rented"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.rented}
          required
        >
          <option value="">Seleccionar</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
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
          onChange={onChangeEditNeighbour}
          value={newNeighbour.numberOfResidents}
          required
        />
        <label htmlFor="yearOfPurchase" className="form__label">
          Fecha de adquisición
        </label>
        <input
          type="date"
          className="form__input"
          id="yearOfPurchase"
          min={1900 - 1 - 1}
          onChange={onChangeEditNeighbour}
          value={newNeighbour.yearOfPurchase}
          required
        />
        <label htmlFor="image" className="form__label">
          Foto URL
        </label>
        <input
          type="url"
          className="form__input"
          id="image"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.image}
          required
        />
        <label htmlFor="coments" className="form__label">
          Comentarios
        </label>
        <textarea
          className="form__input form__coment"
          id="coments"
          onChange={onChangeEditNeighbour}
          value={newNeighbour.coments}
          required
        />
        <div className="form__button">
          <Button buttonText={buttonText} />
        </div>
      </form>
    </NeighboursFormStyled>
  );
};

export default NeighboursForm;
