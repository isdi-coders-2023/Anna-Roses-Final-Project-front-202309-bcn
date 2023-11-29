import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.headerColor};
  padding: 23px 20px 9px 20px;
  height: 95px;
  position: fixed;
  width: 100%;

  .image {
    object-fit: contain;
    height: 63px;
    width: 280px;
  }
`;

export default HeaderStyled;
