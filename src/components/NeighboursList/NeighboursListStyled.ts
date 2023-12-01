import styled from "styled-components";

const NeighboursListStyled = styled.ul`
  margin-bottom: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 300px;
  align-items: start;
  justify-content: center;
  justify-items: center;
  align-items: start;
  gap: 30px;

  .cards {
    object-fit: contain;
    aspect-ratio: auto;
  }

  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
  }
`;

export default NeighboursListStyled;
