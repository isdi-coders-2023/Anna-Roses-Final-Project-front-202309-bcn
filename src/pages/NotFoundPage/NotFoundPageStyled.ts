import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;

  .not-found {
    &__text {
      margin-top: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${({ theme }) => theme.color.errorColor};
    }

    &__oops {
      font-size: 1.875rem;
      font-weight: bold;
    }

    &__404 {
      font-size: 2.813rem;
      font-weight: bold;
      padding: 5px;
    }

    &__page {
      font-size: 1.125rem;
    }

    &__image {
      margin-top: 30px;
    }
  }
`;

export default NotFoundPageStyled;
