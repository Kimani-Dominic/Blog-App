import React from "react";
import '/home/dominic/Jadili/Jadili-react/src/App.css';
import { Link } from "react-router-dom";

const ProfileDropdown: React.FC = () => {
  return (
    <div className="relative-container dropdown-container ml-3">
      <button
        className="dropdown-button"
        type="button"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="absolute -inset-1.5"></span>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
      <div className="dropdown-menu">
        <Link to="/login" className="dropdown-item" role="menuitem">
          Your Profile
        </Link>
        <a href="#" className="dropdown-item" role="menuitem">
          Settings
        </a>
        <a href="#" className="dropdown-item" role="menuitem">
          Sign out
        </a>
      </div>
    </div>
  );
};

export default ProfileDropdown;
