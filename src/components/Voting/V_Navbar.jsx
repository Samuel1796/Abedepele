// Navbar.js
import React, { useState } from "react";
import logo from "../../assets/Main Home Pge/UMaTL 1.png";
import SVGBackground from "../Home/SVGBackground.jsx"; // Import the SVGBackground component
import { Link } from 'react-router-dom';


const V_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative border">
      <SVGBackground />{" "}
      {/* Add the SVGBackground component */}
      <nav className="absolute top-0 left-0 w-full bg-transparent border-gray-200 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3">
            <img src={logo} className="h-16 w-20" alt="Flowbite Logo" />
            <span className="ml-0 h-auto w-40 self-center text-sm font-bold whitespace-pre-line text-white">
              UNIVERSITY OF MINES AND TECHNOLOGY, SRID
            </span>
          </div>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#1b9ce6] focus:outline-none focus:ring-2 focus:ring-blue-300 ${
              isMenuOpen ? "transform rotate-90" : ""
            } transition-transform duration-300`}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close" : "Open"} main menu
            </span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? "hidden" : "block"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? "block" : "hidden"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l12 12M13 1L1 13"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block bg-[#1b9ce6] mt-4 rounded-xl" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 space-y-4 sm:space-y-0 bg-transparent md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white hover:bg-[#70c2f2] rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:border-b-2 md:hover:border-white transition-colors duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white hover:bg-[#70c2f2] rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:border-b-2 md:hover:border-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-white hover:bg-[#70c2f2] rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:border-b-2 md:hover:border-white transition-colors duration-300"
                >
                  Live Voting Count
                </Link>
              </li>
              <hr />
              <li>
                <a href="#faq">
                <button
                  type="button"
                  className="py-1 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-transparent rounded-full border border-white hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 transition-colors duration-300"
                >
                  FAQ
                </button>
                </a>
              </li>
              <hr />
              <li>
                <button
                  type="button"
                  className="text-[#0693e3] bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2 hover:bg-blue-100 transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default V_Navbar;
