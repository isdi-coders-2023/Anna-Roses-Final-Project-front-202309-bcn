import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="/images/logo.webp"
        alt="Mi comunidad favorita logo"
        className="image"
        height="63"
        width="280"
      />
    </HeaderStyled>
  );
};

export default Header;
