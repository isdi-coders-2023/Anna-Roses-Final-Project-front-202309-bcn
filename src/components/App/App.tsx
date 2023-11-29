import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <AppStyled className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/neighbours" />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
