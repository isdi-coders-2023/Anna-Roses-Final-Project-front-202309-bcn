import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ContainerStyled from "../../styles/Container/ContainerStyled";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ContainerStyled className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ContainerStyled>
      <NavMenu />
    </>
  );
};

export default App;
