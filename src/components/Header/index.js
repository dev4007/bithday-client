import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { LuBellDot } from "react-icons/lu";
import { IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { LuSettings2 } from "react-icons/lu";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to toggle dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-2 dark:text-white text-black p-4 flex justify-between items-center">
      {/* Toggle sidebar button */}
      <FaBars
        className={`cursor-pointer ${sidebarOpen ? "hidden" : "block"}`}
        onClick={toggleSidebar}
      />

      {/* Overview section */}
      <>&nbsp;</>
      <span className="hidden lg:block">Overview </span>

      {/* Search input with icon */}
      <div className="flex items-center ml-auto space-x-4">
        <div className="flex items-center bg-blue-50 rounded-full p-2 lg:w-full w-60">
          <IoSearchOutline className="ml-2" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-blue-50 px-2 py-1 rounded-md text-black dark:text-white focus:outline-none"
          />
        </div>

        {/* Settings icon, Bell icon, and Profile link for large screens */}
        <div className="hidden lg:flex items-center space-x-4">
          <IoSettingsOutline className="cursor-pointer text-2xl lg:text-5xl bg-blue-50 rounded-full lg:p-3" />
          <LuBellDot className="cursor-pointer text-2xl lg:text-5xl bg-blue-50 text-red-400 rounded-full lg:p-3" />
          <div className="cursor-pointer">Profile</div>
        </div>

        {/* Dropdown for small screens */}
        <div className="relative lg:hidden">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 bg-blue-50 rounded-full p-2">
            {dropdownOpen ? (
              <LuSettings2 className="text-2xl lg:text-5xl" />
            ) : (
              <VscSettings className="text-2xl lg:text-5xl" />
            )}
          </button>
          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
              <div className="py-1">
                <div className="px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  <IoSettingsOutline className="cursor-pointer text-2xl lg:text-5xl bg-blue-50 rounded-full lg:p-3" />
                </div>
                <div className="px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  <LuBellDot className="cursor-pointer text-2xl lg:text-5xl bg-blue-50 text-red-400 rounded-full lg:p-3" />
                </div>
                <div className="px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  Profile
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
