import { Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../../pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import ContainerStyled from "../../styles/Container/ContainerStyled";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      <Header />
      {uiState.isLoading && <Loading />}
      <ToastContainer icon={false} theme="light" />
      <ContainerStyled className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/error-page" element={<NotFoundPage />} />
        </Routes>
      </ContainerStyled>
      <NavMenu />
    </>
  );
};

export default App;
