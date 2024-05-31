import { Link, NavLink } from "react-router-dom";
import websiteImg from "../../public/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-violet-700 to-fuchsia-700 font-bold z-10 max-w-6xl fixed bg-opacity-40 shadow-xl text-white">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex">
            <img src={websiteImg} className="h-10 w-10 -mr-3" alt="" />
            <Link to="/" className="btn btn-ghost text-3xl">
              PicoTask Rush
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex gap-1">
          <Link to="/login" className="btn btn-success text-white">
            Login
          </Link>
          <Link to="/register" className="btn btn-info text-white">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;