import styled from "styled-components";

const NeighboursFormStyled = styled.div`
  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
    width: 100%;

    &__input {
      margin: 10px 0 20px 0;
      padding: 6px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }

    &__button {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &__coment {
      resize: none;
      height: 80px;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (min-width: 650px) {
    width: 630px;
  }
`;

export default NeighboursFormStyled;
