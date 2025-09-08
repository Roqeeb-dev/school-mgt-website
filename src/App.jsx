import { Routes, Route } from "react-router-dom";
import OnboardingPage from "../pages/OnboardingPage";
import LandingPage from "../pages/LandingPage";
import SetupPage from "../pages/SetupPage";
import UserForm from "../components/UserForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />}>
        <Route index element={<LandingPage />} />
        <Route path="/setup" element={<SetupPage />}>
          <Route index element={<UserForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
