import { MenuIcon, Eye, Database, PenLine } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { academicData, schoolmgtData, MySchoolData } from "./academicData";
import { useState } from "react";
import { useUser } from "../context/userContext";

// Reusable styling function
export const navLinkClasses = ({ isActive }) =>
  `flex items-center gap-2 p-2 rounded-md text-sm font-semibold transition ${
    isActive
      ? "bg-[#F2BA1D] text-black"
      : "bg-[#08183A] text-white hover:bg-[#0d2556]"
  }`;

export default function Sidebar() {
  const { user } = useUser();
  const storedData = JSON.parse(localStorage.getItem("userData") || "{}");

  // Prefer context data, fallback to localStorage
  const username =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : storedData?.firstName && storedData?.lastName
      ? `${storedData.firstName} ${storedData.lastName}`
      : "Guest";

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);
  const [showMySchoolDropdown, setShowMySchoolDropdown] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setShowDropdown((prev) => !prev);
    navigate("/dashboard/academics");
  }

  function handleSchoolClick() {
    setShowSchoolDropdown((prev) => !prev);
    navigate("/dashboard/school-mgt");
  }

  function handleMySchoolClick() {
    setShowMySchoolDropdown((prev) => !prev);
    navigate("/dashboard/my-school");
  }

  return (
    <aside className="w-60 flex-none overflow-y-auto bg-[#08183A] px-3 py-4 flex flex-col gap-3 text-white">
      {/* User section */}
      <div className="flex items-center justify-between space-x-2">
        <NavLink
          to="/profile"
          className="bg-[#F2BA1D] p-2 rounded-md flex-1 text-sm font-semibold text-black"
        >
          {username}
        </NavLink>
        <MenuIcon className="text-white cursor-pointer ml-3" />
      </div>

      {/* Super Admin link */}
      <NavLink to="/dashboard/comingsoon" className={navLinkClasses}>
        <Eye className="h-4 w-4" />
        Go to Super Admin
      </NavLink>

      {/* My School link */}
      <NavLink
        to="/dashboard/my-school"
        className={navLinkClasses}
        onClick={handleMySchoolClick}
      >
        <Database className="h-4 w-4" />
        My School
      </NavLink>

      {showMySchoolDropdown && <Dropdown array={MySchoolData} />}

      {/* School Management with dropdown */}
      <NavLink
        to="/dashboard/school-mgt"
        className={navLinkClasses}
        onClick={handleSchoolClick}
      >
        <PenLine className="h-4 w-4" />
        School Management
      </NavLink>

      {showSchoolDropdown && <Dropdown array={schoolmgtData} />}

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

        {showDropdown && <Dropdown array={academicData} />}
      </div>
    </aside>
  );
}
