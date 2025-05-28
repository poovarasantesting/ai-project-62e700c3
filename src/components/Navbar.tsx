import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Simple React App
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/counter" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Counter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}