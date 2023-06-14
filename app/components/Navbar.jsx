"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-gray-800">
                WebRizen
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Services
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Products
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Portfolio
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Blogs
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                About
              </a>
            </div>

            {/* Get a Proposal Button */}
            <div className="flex items-center NextCustuu">
              <CustomButton/>
            </div>

            {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-800 focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          </div>
        </div>

        {/* Mobile sidebar */}
        {isSidebarOpen && (
          <div className="md:hidden bg-gray-50 border-b">
            <div className="px-4 py-4 space-y-2 text-center">
              <a href="#" className="block text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a href="#" className="block text-gray-800 hover:text-gray-600">
                Products
              </a>
              <a href="#" className="block text-gray-800 hover:text-gray-600">
                Portfolio
              </a>
              <a href="#" className="block text-gray-800 hover:text-gray-600">
                Blogs
              </a>
              <a href="#" className="block text-gray-800 hover:text-gray-600">
                About
              </a>
              <CustomButton />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
