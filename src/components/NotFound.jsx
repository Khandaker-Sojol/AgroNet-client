// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
