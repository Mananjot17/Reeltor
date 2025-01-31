import React from "react";
import { motion } from "framer-motion";
import BrandLogo from "../assets/BrandLogo.svg";

import {
  Home,
  Settings,
  LayoutDashboardIcon,
  PieChartIcon,
  Calendar,
  BriefcaseBusiness,
  Sun,
  Moon,
} from "lucide-react";

const Sidebar = ({
  activeSection,
  setActiveSection,
  isDarkMode,
  toggleDarkMode,
}) => {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboardIcon, label: "Dashboard" },
    { id: "properties", icon: Home, label: "Properties" },
    { id: "Stats", icon: PieChartIcon, label: "Stats" },
    { id: "Cart", icon: BriefcaseBusiness, label: "Cart" },
    { id: "Calender", icon: Calendar, label: "Calender" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];
  return (
    <div className="h-screen w-20 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex flex-col h-full justify-center items-center ">
        <div className="mb-8">
          <img src={BrandLogo} alt="" />
        </div>

        <nav className="flex-1 items-center justify-center">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center p-3 mb-2 rounded-lg ${
                  activeSection === item.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5 " />
              </motion.button>
            );
          })}
        </nav>

        <button
          onClick={toggleDarkMode}
          className="flex items-center p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 " />
          ) : (
            <Moon className="w-5 h-5 " />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
