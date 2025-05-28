import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      <h1 className="text-4xl font-bold text-center">Welcome to my Simple React App</h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl">
        This is a basic React application showcasing components, routing, and state management.
      </p>
      <div className="flex space-x-4 mt-6">
        <Link 
          to="/about" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
        <Link 
          to="/counter" 
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Try Counter
        </Link>
      </div>
    </div>
  );
}