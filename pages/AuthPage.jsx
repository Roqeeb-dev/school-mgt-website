import logo from "../src/assets/school-logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AuthPage() {
  const location = useLocation();
  const activeTab = location.pathname.includes("login") ? "Login" : "Register";

  return (
    <main className="flex h-screen items-center justify-center bg-[url('../src/assets/laptop-bg-2.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="flex w-[85%] h-[85vh] rounded-3xl border-2 border-white shadow-xl overflow-hidden">
        {/* Left side */}
        <div className="flex-1 flex items-center justify-center bg-[url('../src/assets/laptop-bg.jpg')] bg-cover bg-center bg-no-repeat ">
          <img src={logo} alt="Main logo" />
        </div>

        {/* Right side */}
        <div className="bg-white w-[400px] p-5 lg:p-10 flex flex-col">
          {/* Tabs */}
          <div className="flex items-center justify-center rounded-2xl mb-4 bg-gray-50">
            <Link
              to="/auth/login"
              className={`p-2 rounded-2xl text-sm w-[50%] text-center ${
                activeTab === "Login"
                  ? "bg-[#F2BA1D] font-semibold"
                  : "bg-transparent"
              }`}
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className={`p-2 rounded-2xl text-sm w-[50%] text-center ${
                activeTab === "Register"
                  ? "bg-[#F2BA1D] font-semibold"
                  : "bg-transparent"
              }`}
            >
              Register
            </Link>
          </div>

          {/* Dynamic content */}
          <div>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}
