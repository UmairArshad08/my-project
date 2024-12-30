import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Umair</div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>

        <button className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
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

      {isMenuOpen && (
        <div className="md:hidden bg-black text-white space-y-4 py-4 text-center">
          <a
            href="#home"
            className="block hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </a>
          <a
            href="#services"
            className="block hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="block hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
