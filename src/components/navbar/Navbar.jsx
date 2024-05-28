import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import InputField from '../inputField/InputField';

const MobileMenuButton = ({ toggleMenu }) => (
  <div className="md:hidden flex items-center">
    <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
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
);

MobileMenuButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

const Logo = () => (
  <NavLink to="/" className="flex items-center py-4 px-2">
    <span className="font-semibold capitalize text-blue-800 text-lg">
      Pokemon App
    </span>
  </NavLink>
);

const DesktopInputField = () => (
  <div className="w-full sm:w-[40%] hidden md:flex">
    <InputField />
  </div>
);

const MobileMenu = ({ isOpen }) => (
  <div
    className={`${isOpen ? 'block' : 'hidden'} mobile-menu w-[90%] py-5 px-3`}
  >
    <InputField />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="sm:w-[80%] mx-auto py-1 px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopInputField />
          <MobileMenuButton toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
