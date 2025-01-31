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
  // Sidebar Menu Items
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboardIcon, label: "Dashboard" },
    { id: "properties", icon: Home, label: "Properties" },
    { id: "stats", icon: PieChartIcon, label: "Stats" }, // 🔹 Changed 'Stats' to lowercase to match others
    { id: "cart", icon: BriefcaseBusiness, label: "Cart" }, // 🔹 Changed 'Cart' to lowercase for consistency
    { id: "calendar", icon: Calendar, label: "Calendar" }, // 🔹 Fixed spelling mistake ('Calender' -> 'Calendar')
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="h-screen w-20 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex flex-col h-full justify-between items-center">
        {/*  Company Logo */}
        <div className="mb-8">
          <img src={BrandLogo} alt="Brand Logo" className="w-10 h-10" />
        </div>

        {/*  Navigation Menu */}
        <nav className="flex flex-col items-center space-y-4 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }} // 🔹 Slight scale-up effect on hover
                whileTap={{ scale: 0.95 }} // 🔹 Slight shrink effect on tap
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-blue-500 text-white" // ✅ Active Section Highlight
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            );
          })}
        </nav>

        {/* Toggle Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
