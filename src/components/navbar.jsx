import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo(8).png";
import UserNavigation from "./user-navigation";
import { UserContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userNavPanel, setUserNavPanel] = useState(false);

  const handleUserNavPanel = () => {
    setUserNavPanel((currentVal) => !currentVal);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setUserNavPanel(false);
    }, 200);
  };

  const {
    userAuth,
    userAuth: { access_token, profile_img },
    setUserAuth,
  } = useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-black bg-opacity-50 p-4">
        <Link to="/">
          <img src={Logo} alt="Brand Logo" className="w-[5rem]" />
        </Link>

        {/* Toggle Button for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`flex-col items-center md:flex md:flex-row md:space-x-8 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <Link
            to="/hospital"
            className="text-l block py-2 font-[700] text-white"
          >
            Hospital
          </Link>
          <Link to="/rehab" className="text-l block py-2 font-[700] text-white">
            Rehabitation Center
          </Link>
          <Link
            to="/police"
            className="text-l block py-2 font-[700] text-white"
          >
            Police Station
          </Link>
          <Link
            to="/emergency"
            className="text-l block py-2 font-[700] text-red-500"
          >
            Emergency Number
          </Link>
        </div>

        {/* Sign In and Sign Up */}
        {/* <div
          className={`space-x-4 md:flex ${isOpen ? "block" : "hidden"} md:block`}
        >
          <Link to='/signin' className="rounded-[1.5rem] bg-blue-500 px-4 py-2 font-bold text-white">
            Sign In
          </Link>
          <Link to='/signup' className="rounded-[1.5rem] border border-blue-500 bg-blue-500 bg-transparent px-4 py-2 font-bold text-blue-500 hover:bg-blue-50 hover:text-gray-700">
            Sign Up
          </Link>
        </div> */}

        {access_token ? (
          <>
            <div
              className="relative"
              onClick={handleUserNavPanel}
              onBlur={handleBlur}
            >
              <button className="mt-1 h-12 w-12">
                <img
                  src={profile_img}
                  className="h-full w-full rounded-full object-cover"
                />
              </button>

              {userNavPanel ? <UserNavigation /> : ""}
            </div>
          </>
        ) : (
          <>
            <div
              className={`space-x-4 md:flex ${isOpen ? "block" : "hidden"} md:block`}
            >
              <Link
                className="rounded-[1.5rem] bg-blue-500 px-4 py-2 font-bold text-white"
                to="/signin"
              >
                Sign In
              </Link>

              <Link
                className="rounded-[1.5rem] border border-blue-500 bg-blue-500 bg-transparent px-4 py-2 font-bold text-blue-500 hover:bg-blue-50 hover:text-gray-700"
                to="/signup"
              >
                Sign up
              </Link>
            </div>
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
