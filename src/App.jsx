import { Routes, Route } from "react-router-dom";
import OnboardingPage from "../pages/OnboardingPage";
import LandingPage from "../pages/LandingPage";
import SetupPage from "../pages/SetupPage";
import UserForm from "../components/UserForm";
import PricingCards from "../components/PricingCards";
import PaymentPage from "../components/PaymentPage";
import Finished from "../components/Finished";
import AuthPage from "../pages/AuthPage";
import Register from "../components/Register";
import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import SuperAdmin from "../components/SuperAdmin";
import SchoolMgt from "../components/SchoolMgt";
import Academics from "../components/Academics";
import MySchool from "../components/MySchool";

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
        <Route path="/auth" element={<AuthPage />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="my-school" element={<MySchool />} />
          <Route path="super-admin" element={<SuperAdmin />} />
          <Route path="school-mgt" element={<SchoolMgt />} />
          <Route path="academics" element={<Academics />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
