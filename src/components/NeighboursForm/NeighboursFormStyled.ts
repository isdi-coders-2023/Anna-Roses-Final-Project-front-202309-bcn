import styled from "styled-components";

const NeighboursFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    &__input {
      margin: 10px 0 20px 0;
      padding: 6px;
      font-size: 16px;
      height: 40px;
    }

    &__button {
      text-align: center;
    }

    &__coment {
      resize: none;
      height: 80px;
    }
  }

  @media (min-width: 650px) {
    .form {
      &__input {
        width: 630px;
      }
    }
  }
`;

export default NeighboursFormStyled;
