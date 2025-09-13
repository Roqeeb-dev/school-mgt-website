import { NavLink } from "react-router-dom";
import { User2, Bell } from "lucide-react";
import { useUser } from "../context/userContext";
import logo from "../src/assets/school-logo.png";

export default function Navbar() {
  const { user } = useUser();
  const storedData = JSON.parse(localStorage.getItem("userData") || "{}");

  // Prefer context data, fallback to localStorage
  const username =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : storedData?.firstName && storedData?.lastName
      ? `${storedData.firstName} ${storedData.lastName}`
      : "Guest";
  return (
    <header className="sticky top-0 bg-white p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-between">
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
    </header>
  );
}
