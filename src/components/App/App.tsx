import { Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../../pages/HomePage/HomePage";
import ContainerStyled from "../../styles/shared/ContainerStyled/ContainerStyled";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import TostifyStiled from "../../styles/shared/TostifyStyled/TostifyStyled";
import CreateNeighbourPage from "../../pages/CreateNeighbourPage/CreateNeighbourPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import NeighbourDetailPage from "../../pages/NeighbourDetailPage/NeighbourDetailPage";
import ModifyNeighbourPage from "../../pages/ModifyNeighbourPage/ModifyNeighbourPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      <Header />
      {uiState.isLoading && <Loading />}
      <TostifyStiled icon={false} autoClose={10000} />
      <ScrollToTop />
      <ContainerStyled className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateNeighbourPage />} />
          <Route
            path="/detalle/:neighbourId"
            element={<NeighbourDetailPage />}
          />
          <Route
            path="/modificar/:neighbourId"
            element={<ModifyNeighbourPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ContainerStyled>
      <NavMenu />
    </>
  );
};

export default App;
