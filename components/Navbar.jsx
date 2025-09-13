import { NavLink } from "react-router-dom";
import { User2, Bell, Menu } from "lucide-react";
import { useUser } from "../context/userContext";
import logo from "../src/assets/school-logo.png";

export default function Navbar({ onToggleSidebar }) {
  const { user } = useUser();
  const storedData = JSON.parse(localStorage.getItem("userData") || "{}");

  const username =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : storedData?.firstName && storedData?.lastName
      ? `${storedData.firstName} ${storedData.lastName}`
      : "Guest";

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between p-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10" />
          <p className="font-bold">Delhi Public School</p>
        </div>

        {/* Navlinks */}
        <article className="flex items-center space-x-6 text-sm font-semibold">
          <div className="flex items-center space-x-3">
            <p className="text-gray-500">
              Free Trial - <span className="text-[#F2BA1D]">30 days trial</span>
            </p>
            <NavLink className="py-1 px-2 rounded-md hover:bg-gray-200">
              Buy Now
            </NavLink>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 cursor-pointer">
              <User2 className="h-9 w-9 p-2 rounded-full bg-gray-300" />
              <p>{username}</p>
            </div>
            <button>
              <Bell className="fill-black w-6 h-6" />
            </button>
          </div>
        </article>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between p-3">
        {/* Hamburger */}
        <button onClick={onToggleSidebar}>
          <Menu className="w-7 h-7" />
        </button>

        {/* Logo */}
        <img src={logo} alt="Logo" className="w-10" />

        {/* My Account */}
        <button className="bg-[#F2BA1D] text-sm font-semibold px-3 py-1 rounded-lg">
          My Account
        </button>
      </div>
    </header>
  );
}
