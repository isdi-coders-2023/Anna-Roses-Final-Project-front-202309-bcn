import styled from "styled-components";

const TitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.typography.titleSize};
  text-align: center;
  padding: 33px 26px 0 26px;
  margin-bottom: 35px;
`;

export default TitleStyled;
