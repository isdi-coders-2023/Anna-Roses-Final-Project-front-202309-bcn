import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.softBackgroundColor};

  .loading {
    &__image {
      margin-top: 100px;
      object-fit: contain;
    }
  }
`;

export default LoadingStyled;
