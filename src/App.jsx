import { Routes, Route } from "react-router-dom";
import OnboardingPage from "../pages/OnboardingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
    </Routes>
  );
}

export default App;
