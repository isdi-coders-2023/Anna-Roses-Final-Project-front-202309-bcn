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
          Propietario 2 (nombre y apellidos)
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
          Comentarios
        </label>
        <textarea
          className="form__input form__coment"
          id="coments"
          onChange={onChangeEditNeighbour}
          required
        />
        <div className="form__button">
          <Button buttonText="Añadir" />
        </div>
      </form>
    </NeighboursFormStyled>
  );
};

export default NeighboursForm;
