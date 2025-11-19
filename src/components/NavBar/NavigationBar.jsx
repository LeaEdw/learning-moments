import "./NavigationBar.css";
import { Link, useNavigate } from "react-router-dom";
import { SettingsDropdown } from "./SettingsDropdown";

export const NavigationBar = () => {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <Link to="/" className="navbar-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/my-posts"className="navbar-link">My Posts</Link>
      </li>
      <li className="nav-item">
        <Link to="new-post" className="navbar-link">+</Link>
      </li>
      <li className="nav-item">
        <Link to="favorites" className="navbar-link">Favorites</Link>
      </li>
      <li className="nav-item">
        <SettingsDropdown />
      </li>
    </ul>
  );
};
