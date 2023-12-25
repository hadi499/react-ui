import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-evenly bg-blue-500 text-lg 
            text-white h-14"
    >
      <span className="hover:text-red-300">
        <Link to="/">Home</Link>
      </span>
      <span className="hover:text-red-300">
        <Link to="/create">Create Post</Link>
      </span>

      <span className="hover:text-red-300">
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default Navbar;
