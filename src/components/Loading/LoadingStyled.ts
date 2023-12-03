import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .loading {
    &__image {
      margin-top: 100px;
      object-fit: contain;
    }
  }
`;

export default LoadingStyled;
