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
import SchoolMgtDashboard from "../components/SchoolMgtDashboard";
import Academics from "../components/Academics";
import AcademicDashboard from "../components/AcademicDashboard";
import MySchool from "../components/MySchool";
import MySchoolDashboard from "../components/MySchoolDashboard";
import MySchoolInquiries from "../components/MySchoolInquiries";
import AddBranch from "../components/AddBranch";
import Billing from "../components/Billing";
import Addon from "../components/Addon";
import ComingSoon from "../components/ComingSoonPage";
import StudentLeaves from "../components/StudentLeave";
import { academicData } from "../components/academicData";
import { UserProvider } from "../context/userContext";

function App() {
  return (
    <UserProvider>
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
            <Route path="super-admin" element={<SuperAdmin />} />

            <Route path="my-school" element={<MySchool />}>
              <Route index element={<MySchoolDashboard />} />
              <Route path="inquiries" element={<MySchoolInquiries />} />
            </Route>

            <Route path="school-mgt" element={<SchoolMgt />}>
              <Route index element={<SchoolMgtDashboard />} />
              <Route path="add-branch" element={<AddBranch />} />
            </Route>

            <Route path="academics" element={<Academics />}>
              <Route index element={<AcademicDashboard />} />
              <Route path="student-leaves" element={<StudentLeaves />} />
            </Route>

            <Route path="billing" element={<Billing />} />
            <Route path="addon" element={<Addon />} />
            <Route path="comingsoon" element={<ComingSoon />} />
          </Route>
        </Route>
        {academicData
          .filter((item) => item.comingSoon)
          .map((item, index) => (
            <Route
              key={index}
              path={item.to}
              element={<ComingSoon message={`${item.label} Coming Soon`} />}
            />
          ))}
      </Routes>
    </UserProvider>
  );
}

export default App;
