import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-[#89AC46] text-[#F8ED8C]">
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Little Lemon Logo" className="h-8 w-auto" />
          <motion.span
            className="text-xl font-bold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Little Lemon
          </motion.span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#FF8989] transition-colors duration-200">
            Home
          </Link>
          <Link to="/booking" className="hover:text-[#FF8989] transition-colors duration-200">
            Book a Table
          </Link>
          <Link to="/contact" className="hover:text-[#FF8989] transition-colors duration-200">
            Contact
          </Link>
        </div>
        {/* Hamburger for Mobile */}
        <button
          onClick={handleToggle}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              // Close icon
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L12 
                   10.586l6.293-6.293a1 1 0 011.414 
                   1.414L13.414 12l6.293 6.293a1 1 0 
                   01-1.414 1.414L12 13.414l-6.293 
                   6.293a1 1 0 01-1.414-1.414L10.586 
                   12 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              // Hamburger icon
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 110 2H4a1 1 0 
                   110-2zm0 6h16a1 1 0 110 2H4a1 1 
                   0 110-2zm0 6h16a1 1 0 110 2H4a1 
                   1 0 110-2z"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#FF8989]"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col px-4 py-2">
            <Link
              to="/"
              className="py-2 border-b border-[#F8ED8C] hover:text-[#89AC46] transition-colors duration-200"
              onClick={handleToggle}
            >
              Home
            </Link>
            <Link
              to="/booking"
              className="py-2 border-b border-[#F8ED8C] hover:text-[#89AC46] transition-colors duration-200"
              onClick={handleToggle}
            >
              Book a Table
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:text-[#89AC46] transition-colors duration-200"
              onClick={handleToggle}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
