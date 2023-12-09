import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.softBackgroundColor};

  .loading {
    &__image {
      object-fit: contain;
    }
  }
`;

export default LoadingStyled;
