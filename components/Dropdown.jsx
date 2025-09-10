import { NavLink } from "react-router-dom";
import { Book } from "lucide-react";

export default function Dropdown({ array }) {
  return (
    <ul className="my-2 bg-[#F2BA1D] p-2 rounded-xl text-sm text-black font-medium">
      {array.map((entry, index) => {
        return (
          <li
            key={index}
            className="flex items-center space-x-2 p-2 hover:bg-yellow-600"
          >
            <Book className="h-4 w-4" />
            <NavLink to={entry.to}>{entry.label}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
