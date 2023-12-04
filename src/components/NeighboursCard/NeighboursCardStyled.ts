import styled from "styled-components";

const NeighboursCardStyled = styled.article`
  border: solid 1px;
  border-color: ${({ theme }) => theme.color.softColor};
  padding: 23px 16px 32px 16px;

  .card {
    &__image {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;
      width: 100%;
      object-fit: contain;
      padding: 0 33px;
    }

    &__name {
      font-size: ${({ theme }) => theme.typography.titleSize};
      font-weight: bold;
    }

    &__item {
      margin-top: 15px;
    }

    &__intro {
      font-weight: bold;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 11px;
      margin-top: 32px;
    }
  }
`;

export default NeighboursCardStyled;
