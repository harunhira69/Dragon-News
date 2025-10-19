import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import users from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleLogout = () => {
    Logout()
      .then(() => toast.success("Logout successful"))
      .catch((e) => console.log(e.message));
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 w-full bg-base-100 p-3 border-b border-gray-200">
      
      {/* Left: User email */}
      <div className="text-sm text-gray-600">
        {user && <span>{user.email}</span>}
      </div>

      {/* Center: Nav links */}
      <div className="flex flex-wrap gap-4 text-accent font-medium justify-center">
        <NavLink to="/" className="hover:text-secondary">Home</NavLink>
        <NavLink to="/about" className="hover:text-secondary">About</NavLink>
        <NavLink to="/carrer" className="hover:text-secondary">Career</NavLink>
      </div>

      {/* Right: Avatar + Login/Logout */}
      <div className="flex items-center gap-3">
        <img
          src={user ? user.photoURL : users}
          alt="User"
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-4">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-4">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
