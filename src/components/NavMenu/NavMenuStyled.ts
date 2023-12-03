import styled from "styled-components";

const NavMenuStyled = styled.nav`
  .nav-menu {
    bottom: 0;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    border-top: solid 2px;
    border-color: ${({ theme }) => theme.color.headerColor};
    margin-bottom: 0;
    background-color: ${({ theme }) => theme.color.softBackgroundColor};
  }

  .active {
    color: ${({ theme }) => theme.color.softColor};
  }
`;

export default NavMenuStyled;
