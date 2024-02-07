import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {

  const navLinks = (
    <>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        <NavLink className="text-sm text-[#76453B] lg:text-lg font-semibold" to="/">
            Home
        </NavLink>
        <NavLink className="text-sm text-[#76453B] lg:text-lg font-semibold" to="/dashboard">
            Dashboard
        </NavLink>
        <NavLink className="text-sm text-[#76453B] lg:text-lg font-semibold" to="/login">
            Login
        </NavLink>
        <NavLink className="text-sm text-[#76453B] lg:text-lg font-semibold" to="/cart">
            Cart
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="navbar  top-0 z-10 mx-auto bg-[#F8FAE5] border-2 border-[#76453B] opacity-80 rounded-3xl  ">
      <div className="navbar-start flex justify-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow border border-[#76453B] bg-[#F8FAE5] bg-opacity-100  rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="https://i.ibb.co/ZTJ8Pz6/logo.png" className="h-16" alt="" />
          <p className="text-xs font-bold text-[#76453B]">MOBILE MAGNET</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex justify-center">
        
      </div>
    </div>
  );
};

export default Nav;