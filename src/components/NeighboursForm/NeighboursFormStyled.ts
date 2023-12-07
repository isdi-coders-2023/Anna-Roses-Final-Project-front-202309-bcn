import styled from "styled-components";

const NeighboursFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .form {
    &__label {
      font-weight: bold;
    }

    &__input {
      margin: 10px 0 20px 0;
      padding: 6px;
    }

    &__button {
      text-align: center;
    }
  }
`;

export default NeighboursFormStyled;
