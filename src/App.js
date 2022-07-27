import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPage from "./pages/ForgotPage/ForgotPage";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/auth/forgot" element={ <ForgotPage/>}/>
    </Routes>
  );
}

export default App;
