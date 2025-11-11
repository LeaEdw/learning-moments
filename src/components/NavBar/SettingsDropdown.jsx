import "./NavigationBar.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export const SettingsDropdown = () => {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-settings">
        Settings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate("/profile")}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Statistics")}>
          Statistics
        </Dropdown.Item>
        <Dropdown.Item 
            onClick={() => {
                localStorage.removeItem("learning_user");
                navigate("/", { replace: true });
        }}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
