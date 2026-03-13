import React, { useState, useRef, useEffect } from "react";
import { Menu, Mail, ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <button
          className="menu-toggle"
          onClick={onMenuClick}
          title="Toggle menu"
        >
          <Menu size={20} color="#fff" />
        </button>
      </div>

      <div className="header-right">
        <div className="notifications">
          <Mail size={18} color="#2fa15f" />
          <span className="badge">5</span>
          <ChevronDown size={14} color="#6c757d" className="caret" />
        </div>

        <div className="user-profile-wrapper" ref={dropdownRef}>
          <div
            className="user-profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="user-id">UUR00884/16</span>
            <ChevronDown size={14} color="#6c757d" className="caret" />
          </div>

          {dropdownOpen && (
            <div className="profile-dropdown">
              <div
                className="dropdown-item"
                onClick={() => setDropdownOpen(false)}
              >
                <span>Change Password</span>
              </div>
              <div
                className="dropdown-item"
                onClick={() => navigate("/profile/basic")}
              >
                <span>Profile</span>
              </div>
              <div className="dropdown-item danger" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
