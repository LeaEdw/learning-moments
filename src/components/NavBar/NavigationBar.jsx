import "./NavigationBar.css";
import { Link, useNavigate } from "react-router-dom";
import { SettingsDropdown } from "./SettingsDropdown";

export const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="navbar">
      <li className="nav-item">
        <Link className="navbar-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link">My Posts</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link">+</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link">Favorites</Link>
      </li>
      <li className="nav-item">
        <SettingsDropdown />
      </li>
    </ul>
  );
};
