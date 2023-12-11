import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 120px;
  height: 40px;
  border: solid 1px;
  border-color: ${({ theme }) => theme.color.softColor};
`;

export default ButtonStyled;
