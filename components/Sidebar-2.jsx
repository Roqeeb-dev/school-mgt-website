import { MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import Sidelink from "./Sidelink";
import { sideLinksData } from "./academicData";

export default function SecondSidebar({ sidebarOpen, onCloseSidebar }) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 w-60 bg-[#08183A] px-3 py-4 flex flex-col gap-3 text-white transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:flex
      `}
    >
      {/* Header (Name + Close Icon on mobile) */}
      <div className="flex items-center justify-between space-x-2">
        <NavLink
          to="/profile"
          className="bg-[#F2BA1D] p-2 rounded-md flex-1 text-sm font-semibold text-black"
        >
          Roqeeb Taiwo
        </NavLink>

        {/* Hide the close button on desktop */}
        <MenuIcon
          onClick={onCloseSidebar}
          className="text-white cursor-pointer ml-3 md:hidden"
        />
      </div>

      {/* Sidebar links */}
      <div className="mt-4 flex flex-col gap-2">
        {sideLinksData.map((entry, idx) => (
          <Sidelink
            key={idx}
            to={entry.to}
            icon={entry.icon}
            label={entry.label}
          />
        ))}
      </div>
    </aside>
  );
}
