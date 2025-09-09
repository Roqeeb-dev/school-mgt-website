import { MenuIcon, Eye, Database, PenLine } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";

// Reusable styling function
const navLinkClasses = ({ isActive }) =>
  `flex items-center gap-2 p-2 rounded-md text-sm font-semibold transition ${
    isActive
      ? "bg-[#F2BA1D] text-black"
      : "bg-[#08183A] text-white hover:bg-[#0d2556]"
  }`;

export default function Sidebar() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  function handleClick(e) {
    e.preventDefault(); // prevent instant navigation
    setShowDropdown((prev) => !prev);
  }

  // Keep dropdown open if you're inside academics route
  const isAcademicsActive = location.pathname.startsWith(
    "/dashboard/academics"
  );

  return (
    <aside className="w-60 flex-none overflow-y-auto bg-[#08183A] px-3 py-4 flex flex-col gap-5 text-white">
      {/* User section */}
      <div className="flex items-center justify-between space-x-2">
        <NavLink
          to="/profile"
          className="bg-[#F2BA1D] p-2 rounded-md flex-1 text-sm font-semibold text-black"
        >
          Roqeeb Taiwo
        </NavLink>
        <MenuIcon className="text-white cursor-pointer ml-3" />
      </div>

      {/* Super Admin link */}
      <NavLink to="/dashboard/super-admin" className={navLinkClasses}>
        <Eye className="h-4 w-4" />
        Go to Super Admin
      </NavLink>

      {/* My School link */}
      <NavLink to="/my-school" className={navLinkClasses}>
        <Database className="h-4 w-4" />
        My School
      </NavLink>

      {/* School Management (no dropdown) */}
      <NavLink to="/dashboard/school-mgt" className={navLinkClasses}>
        <PenLine className="h-4 w-4" />
        School Management
      </NavLink>

      {/* Academics with dropdown */}
      <div>
        <NavLink
          to="/dashboard/academics"
          className={navLinkClasses}
          onClick={handleClick}
        >
          <PenLine className="h-4 w-4" />
          Academics
        </NavLink>

        {(showDropdown || isAcademicsActive) && <Dropdown />}
      </div>
    </aside>
  );
}
