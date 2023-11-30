import { NavLink } from "react-router-dom";
import NavMenuStyled from "./NavMenuStyled";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled className="nav-menu">
      <li className="nav-menu__item">
        <NavLink className="nav-menu__link" to={"/home"}>
          Home
        </NavLink>
      </li>
      <li className="nav-menu__item">Añadir</li>
    </NavMenuStyled>
  );
};

export default NavMenu;
