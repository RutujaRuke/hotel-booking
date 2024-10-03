import React, { useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Logo</div>

        {/* Menu Items (for large screens) */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#hotels" className="text-gray-600 hover:text-gray-900">Hotels</a>
          <a href="#login" className="text-gray-600 hover:text-gray-900">Login</a>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-gray-600" />
            <span className="text-gray-600">+123 456 7890</span>
          </div>
        </div>

        {/* Menu Icon (for mobile screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <a href="#home" className="block py-2 text-gray-600 hover:text-gray-900">Home</a>
          <a href="#hotels" className="block py-2 text-gray-600 hover:text-gray-900">Hotels</a>
          <a href="#login" className="block py-2 text-gray-600 hover:text-gray-900">Login</a>
          <div className="flex items-center space-x-2 py-2">
            <FaPhoneAlt className="text-gray-600" />
            <span className="text-gray-600">+123 456 7890</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
