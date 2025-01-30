import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Home, Building2, Settings } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { id: "dashboard", icon: BarChart2, label: "Dashboard" },
    { id: "properties", icon: Home, label: "Properties" },
    { id: "listings", icon: Building2, label: "Listings" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];
  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            RealEstate
          </h1>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="`w-full flex items-center p-3 mb-2 rounded-lg"
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
