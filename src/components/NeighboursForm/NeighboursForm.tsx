import { useEffect, useState } from "react";
import {
  NeighbourStructure,
  NeighbourWithoutId,
} from "../../store/features/types";
import Button from "../Button/Button";
import NeighboursFormStyled from "./NeighboursFormStyled";

interface NeighbourFormProps {
  submitAction: (newNeighbour: NeighbourStructure) => void;
}

const NeighboursForm = ({
  submitAction,
}: NeighbourFormProps): React.ReactElement => {
  const emptyNeighbour: NeighbourWithoutId = {
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

  useEffect(() => {
    const newNeighbourValues = Object.values(newNeighbour);

    newNeighbourValues.every((value) => value !== "");
  }, [newNeighbour]);

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(newNeighbour as NeighbourStructure);
  };

  return (
    <NeighboursFormStyled
      className="form"
      onSubmit={onSubmitForm}
      autoComplete="off"
    >
      <div className="form">
        <label htmlFor="name" className="form__label">
          Nombre y apellidos
        </label>
        <input
          type="text"
          className="form__input"
          id="name"
          onChange={onChangeEditNeighbour}
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
          required
        />
        <label htmlFor="secondOwner" className="form__label">
          Propietario 2 (nombre y apellidos) - (opcional)
        </label>
        <input
          type="text"
          className="form__input"
          id="secondOwner"
          onChange={onChangeEditNeighbour}
        />
        <label htmlFor="powers" className="form__label">
          Poderes
        </label>
        <select
          className="form__input form__select"
          id="powers"
          onChange={onChangeEditNeighbour}
          required
        >
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
        <select
          className="form__input form__select"
          id="activityKind"
          onChange={onChangeEditNeighbour}
          required
        >
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
        <label htmlFor="firstResidence" className="form__label">
          Es la primera vivienda?
        </label>
        <select
          className="form__input form__select"
          id="firstResidence"
          onChange={onChangeEditNeighbour}
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
          <option value="n/a" className="form__select--input">
            N/A
          </option>
        </select>
        <label htmlFor="rented" className="form__label">
          Se alquila?
        </label>
        <select
          className="form__input form__select"
          id="rented"
          onChange={onChangeEditNeighbour}
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
          onChange={onChangeEditNeighbour}
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
          required
        />
        <label htmlFor="coments" className="form__label">
          Comentarios (opcional)
        </label>
        <textarea
          className="form__input form__coment"
          id="coments"
          onChange={onChangeEditNeighbour}
          required
        />
        <div className="form__label form__button">
          <Button buttonText="Añadir" />
        </div>
      </div>
    </NeighboursFormStyled>
  );
};

export default NeighboursForm;
