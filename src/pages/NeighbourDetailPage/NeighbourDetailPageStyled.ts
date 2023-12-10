import styled from "styled-components";

const NeighbourDetailPageStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-wrap: anywhere;
  margin-bottom: 30px;

  .detail {
    &__container {
      width: 100%;
    }

    &__image-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
    }

    &__image {
      width: 300px;
      object-fit: contain;
    }

    &__name {
      font-size: 1.375rem;
      margin-top: 7px;
    }

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 15px;
    }

    &__desc {
      width: 50%;
    }

    &__info {
      width: 50%;
      text-align: end;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 11px;
      margin-top: 32px;
      width: 100%;
    }
  }

  @media (min-width: 630px) {
    .detail {
      &__container {
        width: 610px;
      }
    }
  }

  @media (min-width: 380px) {
    .detail {
      &__desc {
        font-weight: bold;
      }
    }
  }
`;

export default NeighbourDetailPageStyled;
