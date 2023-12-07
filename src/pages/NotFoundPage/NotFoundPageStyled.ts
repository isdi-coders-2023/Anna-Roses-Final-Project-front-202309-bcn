import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  .not-found {
    &__text {
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
      padding: 20px;
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
