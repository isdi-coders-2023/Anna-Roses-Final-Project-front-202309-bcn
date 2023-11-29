import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10;

  .title {
    font-size: ${({ theme }) => theme.typography.pageTitleSize};
    text-align: center;
  }
`;

export default HomePageStyled;
