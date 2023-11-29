import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <AppStyled className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/neighbours" />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
