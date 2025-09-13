import { MenuIcon, Eye, Database, PenLine, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { academicData, schoolmgtData, MySchoolData } from "./academicData";
import { useState } from "react";
import { useUser } from "../context/userContext";

export const navLinkClasses = ({ isActive }) =>
  `flex items-center gap-2 p-2 rounded-md text-sm font-semibold transition ${
    isActive
      ? "bg-[#F2BA1D] text-black"
      : "bg-[#08183A] text-white hover:bg-[#0d2556]"
  }`;

export default function Sidebar({ sidebarOpen, onCloseSidebar }) {
  const { user } = useUser();
  const storedData = JSON.parse(localStorage.getItem("userData") || "{}");

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
    onCloseSidebar?.();
  }

  function handleSchoolClick() {
    setShowSchoolDropdown((prev) => !prev);
    navigate("/dashboard/school-mgt");
    onCloseSidebar?.();
  }

  function handleMySchoolClick() {
    setShowMySchoolDropdown((prev) => !prev);
    navigate("/dashboard/my-school");
    onCloseSidebar?.();
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-60 flex-none overflow-y-auto bg-[#08183A] px-3 py-4 flex-col gap-3 text-white">
        <div className="flex items-center justify-between space-x-2">
          <NavLink
            to="/profile"
            className="bg-[#F2BA1D] p-2 rounded-md flex-1 text-sm font-semibold text-black"
          >
            {username}
          </NavLink>
          <MenuIcon className="text-white cursor-pointer ml-3" />
        </div>

        <NavLink to="/dashboard/comingsoon" className={navLinkClasses}>
          <Eye className="h-4 w-4" />
          Go to Super Admin
        </NavLink>

        <NavLink
          to="/dashboard/my-school"
          className={navLinkClasses}
          onClick={handleMySchoolClick}
        >
          <Database className="h-4 w-4" />
          My School
        </NavLink>
        {showMySchoolDropdown && <Dropdown array={MySchoolData} />}

        <NavLink
          to="/dashboard/school-mgt"
          className={navLinkClasses}
          onClick={handleSchoolClick}
        >
          <PenLine className="h-4 w-4" />
          School Management
        </NavLink>
        {showSchoolDropdown && <Dropdown array={schoolmgtData} />}

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

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#08183A] w-60 p-4 flex flex-col gap-3 text-white`}
      >
        <button className="self-end text-white mb-4" onClick={onCloseSidebar}>
          <X className="w-6 h-6" />
        </button>

        <NavLink
          to="/profile"
          className="bg-[#F2BA1D] p-2 rounded-md text-sm font-semibold text-black"
          onClick={onCloseSidebar}
        >
          {username}
        </NavLink>

        {/* Links */}
        <NavLink
          to="/dashboard/comingsoon"
          className={navLinkClasses}
          onClick={onCloseSidebar}
        >
          <Eye className="h-4 w-4" />
          Go to Super Admin
        </NavLink>

        <NavLink
          to="/dashboard/my-school"
          className={navLinkClasses}
          onClick={onCloseSidebar}
        >
          <Database className="h-4 w-4" />
          My School
        </NavLink>

        <NavLink
          to="/dashboard/school-mgt"
          className={navLinkClasses}
          onClick={onCloseSidebar}
        >
          <PenLine className="h-4 w-4" />
          School Management
        </NavLink>

        <NavLink
          to="/dashboard/academics"
          className={navLinkClasses}
          onClick={onCloseSidebar}
        >
          <PenLine className="h-4 w-4" />
          Academics
        </NavLink>
      </div>
    </>
  );
}
