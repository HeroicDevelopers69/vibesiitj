import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-3 pl-10 rounded-full bg-slate-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-700"
      />
      <svg
        className="absolute mt-1 left-3 top-3 w-5 h-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M16 10A6 6 0 1 0 4 10a6 6 0 0 0 12 0z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
