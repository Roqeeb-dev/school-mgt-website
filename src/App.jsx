import { Routes, Route } from "react-router-dom";
import OnboardingPage from "../pages/OnboardingPage";
import LandingPage from "../pages/LandingPage";
import SetupPage from "../pages/SetupPage";
import UserForm from "../components/UserForm";
import PricingCards from "../components/PricingCards";
import PaymentPage from "../components/PaymentPage";
import Finished from "../components/Finished";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />}>
        <Route index element={<LandingPage />} />
        <Route path="/setup" element={<SetupPage />}>
          <Route index element={<UserForm />} />
          <Route path="pricing" element={<PricingCards />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="finish" element={<Finished />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
