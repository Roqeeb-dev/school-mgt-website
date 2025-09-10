import { NavLink } from "react-router-dom";
import { Book } from "lucide-react";

export default function Dropdown({ array }) {
  return (
    <ul className="my-2 bg-[#F2BA1D] p-2 rounded-xl text-sm font-medium">
      {array.map((entry, index) => {
        return (
          <NavLink
            key={index}
            to={entry.to}
            end
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-md transition ${
                isActive
                  ? "bg-[#08183A] text-white"
                  : "text-black hover:bg-yellow-600"
              }`
            }
          >
            <Book className="h-4 w-4" />
            <span className="text-sm font-semibold">{entry.label}</span>
          </NavLink>
        );
      })}
    </ul>
  );
}
