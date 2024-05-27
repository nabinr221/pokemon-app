import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../inputField/InputField';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass =
    'py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300';
  const mobileLinkClass =
    'block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center ">
          <div>
            {/* LOGO */}
            <NavLink to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold capitalize text-gray-500 text-lg">
                pokemon App
              </span>
            </NavLink>
          </div>

          <div className="hidden md:flex  ">
            <InputField />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu open: "block", Menu closed: "hidden" */}
      <div className={`${isOpen ? 'block' : 'hidden'} mobile-menu`}></div>
    </nav>
  );
};

export default Navbar;
