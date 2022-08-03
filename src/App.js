import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ForgotPage } from "./pages/ForgotPage/ForgotPage";
import { RecoveryPage } from "./pages/RecoveryPage/RecoveryPage";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/auth/forgot" element={<ForgotPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
    </Routes>
  );
}

export default App;
