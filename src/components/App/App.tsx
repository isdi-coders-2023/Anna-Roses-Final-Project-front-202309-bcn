import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ContainerStyled from "../../styles/Container/ContainerStyled";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      <Header />
      {uiState.isLoading && <Loading />}
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
