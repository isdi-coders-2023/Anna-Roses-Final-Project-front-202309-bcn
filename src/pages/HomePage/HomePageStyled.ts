import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10;
  margin-top: 95px;
  margin-bottom: 34px;

  .title {
    font-size: ${({ theme }) => theme.typography.titleSize};
    text-align: center;
    padding: 33px 26px 0 26px;
    margin-bottom: 35px;
  }
`;

export default HomePageStyled;
