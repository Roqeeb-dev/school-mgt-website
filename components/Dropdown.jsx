import { NavLink } from "react-router-dom";
import { Book } from "lucide-react";
import { academicData } from "./academicData";

export default function Dropdown({ array }) {
  return (
    <ul className="my-2 bg-[#F2BA1D] p-2 rounded-xl text-sm text-black font-medium">
      {array.map((entry) => {
        return (
          <li className="flex items-center space-x-2 p-2 hover:bg-yellow-600">
            <Book className="h-4 w-4" />
            <NavLink to="" className="">
              {entry.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
