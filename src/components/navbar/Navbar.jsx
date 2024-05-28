import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * MobileMenuButton Component
 * Renders the mobile menu button and handles the menu toggle action.
 *
 * @param {Object} props - Component props
 * @param {Function} props.toggleMenu - Function to toggle the mobile menu visibility
 */
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

/**
 * Logo Component
 * Renders the website logo with a link to the home page.
 */
const Logo = () => (
  <NavLink to="/" className="flex items-center py-4 px-2">
    <span className="font-semibold capitalize text-blue-800 text-lg">
      Pokemon App
    </span>
  </NavLink>
);

/**
 * DesktopMenu Component
 * Renders the navitem for desktop view.
 */
const DesktopMenu = () => (
  <div className="w-full sm:w-[40%] hidden md:flex">
    <NavLink className="block font-semibold" to="/">
      Home
    </NavLink>
  </div>
);

/**
 * MobileMenu Component
 * Renders the mobile menu items when the menu is open.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Boolean indicating if the mobile menu is open
 */
const MobileMenu = ({ isOpen }) => (
  <div className={`${isOpen ? 'block' : 'hidden'} w-[90%] mx-auto pb-2 px-3`}>
    <NavLink className="block font-semibold" to="/">
      Home
    </NavLink>
  </div>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

/**
 * Navbar Component
 * Renders the main navigation bar with logo, input field, and mobile menu button.
 * Includes functionality to toggle the mobile menu.
 */
const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="sm:w-[80%] mx-auto py-1 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Input field for desktop view */}
          <DesktopMenu />
          {/* Mobile menu button */}
          <MobileMenuButton toggleMenu={toggleMenu} />
        </div>
      </div>
      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
