import { MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import Sidelink from "./Sidelink";
import { sideLinksData } from "./academicData";

export default function SecondSidebar() {
  return (
    <aside className="w-60 flex-none overflow-y-auto bg-[#08183A] px-3 py-4 flex flex-col gap-3 text-white">
      <div className="flex items-center justify-between space-x-2">
        <NavLink
          to="/profile"
          className="bg-[#F2BA1D] p-2 rounded-md flex-1 text-sm font-semibold text-black"
        >
          Roqeeb Taiwo
        </NavLink>
        <MenuIcon className="text-white cursor-pointer ml-3" />
      </div>
      {sideLinksData.map((entry) => {
        return <Sidelink to={entry.to} icon={entry.icon} label={entry.label} />;
      })}
    </aside>
  );
}
