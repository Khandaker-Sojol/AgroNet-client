import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "/images/logo.png";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);

  const navLinks = user ? (
    <>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/all-crops">All Crops</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/add-crops">Add Crops</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/my-posts">My Posts</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/my-interests">My Interests</NavLink>
      </li>
    </>
  ) : (
    <>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/all-crops">All Crops</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        alert("SignOut successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar shadow-sm bg-[#FFFFFF] md:px-12 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-0"
          >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow text-[16px] font-medium flex items-start gap-2"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-14 md:w-20 rounded-full " />
          <a className="text-xl md:text-3xl font-bold text-[#001931] ">
            AgroNet
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-[16px] font-medium text-[#1b1919e5] flex items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <div
            className="avatar tooltip tooltip-left gap-4"
            data-tip={user?.displayName || "Unknown User"}
          >
            <div className="ring-[#4CAF50] ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img src={user.photoURL} />
            </div>
            <button
              onClick={handleLogOut}
              className="bg-[#4CAF50] hover:bg-[#388E3C] text-white font-semibold px-6 md:px-10 py-3 rounded-lg transition hover:shadow cursor-pointer"
            >
              {" "}
              SignOut
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-[#4CAF50] hover:bg-[#388E3C] text-white font-semibold px-6 md:px-10 py-3 rounded-lg transition hover:shadow"
          >
            {" "}
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
