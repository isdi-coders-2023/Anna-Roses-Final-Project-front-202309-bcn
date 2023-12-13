import styled from "styled-components";

const NeighboursCardStyled = styled.article`
  border: solid 1px;
  border-color: ${({ theme }) => theme.color.softColor};
  padding: 23px 16px 32px 16px;
  overflow-wrap: anywhere;
  height: 860px;
  position: relative;

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
      position: absolute;
      bottom: 32px;
      right: 30%;
    }

    &__link {
      width: 120px;
      height: 40px;
      border: solid 1px;
      border-color: ${({ theme }) => theme.color.softColor};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__link:hover {
      background-color: ${({ theme }) => theme.color.mainFontColor};
      color: ${({ theme }) => theme.color.softBackgroundColor};
    }
  }
`;

export default NeighboursCardStyled;
