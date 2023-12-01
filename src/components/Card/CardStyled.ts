import styled from "styled-components";

const CardStyled = styled.section`
  border: solid 1px;
  border-color: ${({ theme }) => theme.color.softColor};
  margin-top: 35px;
  padding: 23px 16px 32px 16px;
  gap: 34px;

  .card {
    &__image {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3px;
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
  }
`;

export default CardStyled;
