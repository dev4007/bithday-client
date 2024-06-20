import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaRegIdCard, FaArrowLeft } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { TbChartHistogram } from "react-icons/tb";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebar = useRef(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    { icon: <FaHome className="mr-3 text-2xl" />, label: "Dashboard", to: "/" },
    { icon: <CiCalendar className="mr-3 text-2xl" />, label: "Scheduled Wishes", to: "/scheduledwishes" },
    { icon: <BsFillBookmarkFill className="mr-3 text-2xl" />, label: "Wishes history", to: "/wisheshistory" },
    { icon: <FaUser className="mr-3 text-2xl" />, label: "Customers", to: "/customers" },
    { icon: <FaRegIdCard className="mr-3 text-2xl" />, label: "Voice Artists", to: "/voiceartists" },
    { icon: <IoNotificationsOutline className="mr-3 text-2xl" />, label: "Notifications", to: "/notifications" },
    { icon: <TbChartHistogram className="mr-3 text-2xl" />, label: "Transaction History", to: "/transactionhistory" },
    { icon: <IoSettingsOutline className="mr-3 text-2xl" />, label: "Settings", to: "/settings" },
  ];

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 h-screen flex flex-col overflow-y-hidden bg-white text-blue-950 transition-transform duration-300 ease-linear dark:bg-boxdark ${
        sidebarOpen ? "lg:static lg:translate-x-0 translate-x-0 w-72.5" : "lg:hidden -translate-x-full w-16"
      }`}
    >
      <div className="flex items-center justify-between p-3 py-7 px-9">
        <h1 className={`text-2xl font-extrabold cursor-pointer ${sidebarOpen ? "block" : "hidden"}`} onClick={toggleSidebar}>
          <i> WISH APP</i>
        </h1>
        <h1 className={`text-lg font-bold cursor-pointer ${!sidebarOpen ? "hidden" : "block"}`} onClick={toggleSidebar}>
          <FaArrowLeft />
        </h1>
      </div>
      <nav className="mt-4 flex-1 px-10">
        <ul className="flex flex-col items-start py-5">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`mb-2 flex items-center py-3 cursor-pointer ${location.pathname === item.to ? "text-blue-500 font-bold" : "text-stone-400"}`}
            >
              <Link to={item.to} className="flex items-center" onClick={() => setSidebarOpen(false)}>
                {item.icon}
                <span className={`ml-3 transition-all`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
