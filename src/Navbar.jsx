import React, { useState } from "react";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-blue-600 font-semibold">
              Home
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-semibold">
              About Us
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-semibold">
              Academics
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-semibold">
              Admissions
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-semibold">
              Facilities
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-semibold">
              Achievement
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-semibold">
              Gallery
            </a>
          </div>

          {/* Desktop Portal Login Button */}
          <div className="hidden md:block">
            <button className="border border-black text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-100">
              Portal Login
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <a href="#" className="block text-black font-semibold">
              Home
            </a>
            <a href="#" className="block text-black font-semibold">
              About Us
            </a>
            <a href="#" className="block text-black font-semibold">
              Academics
            </a>
            <a href="#" className="block text-black font-semibold">
              Admissions
            </a>
            <a href="#" className="block text-black font-semibold">
              Facilities
            </a>
            <a href="#" className="block text-black font-semibold">
              Achievement
            </a>
            <a href="#" className="block text-black font-semibold">
              Gallery
            </a>
            <button className="w-full border border-black text-black font-semibold py-2 rounded-md hover:bg-gray-100">
              Portal Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
