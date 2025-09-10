import { navLinkClasses } from "./Sidebar";
import { NavLink } from "react-router-dom";

export default function Sidelink(props) {
  const Icon = props.icon;
  return (
    <NavLink to={props.to} className={navLinkClasses}>
      <Icon className="h-4 w-4" />
      {props.label}
    </NavLink>
  );
}
