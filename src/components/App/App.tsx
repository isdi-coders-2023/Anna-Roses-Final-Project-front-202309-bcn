import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <AppStyled className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/neighbours" />} />
        </Routes>
      </AppStyled>
      <NavMenu />
    </>
  );
};

export default App;
