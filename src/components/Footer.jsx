import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#89AC46] text-[#F8ED8C] py-4">
      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </div>
        
        <div className="space-x-4">
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
      </motion.div>
    </footer>
  );
};

export default Footer;
