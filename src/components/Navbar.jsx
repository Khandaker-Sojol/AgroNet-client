import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-crops">All Crops</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/add-crops">Add Crops</NavLink>
      <NavLink to="/my-posts">My posts</NavLink>
      <NavLink to="/my-interests">My interests</NavLink>
    </>
  );
  return (
    <div className="navbar shadow-sm bg-[#FFFFFF] md:px-12 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-medium flex items-start gap-2"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-2xl md:text-3xl font-bold text-[#001931]">AgroNet</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-[16px] font-medium text-[#1b1919e5] flex items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="avatar">
          <div className="ring-[#4CAF50] ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <Link
          to="/login"
          className="bg-[#4CAF50] hover:bg-[#388E3C] text-white font-semibold px-10 py-3 rounded-lg transition hover:shadow"
        >
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
