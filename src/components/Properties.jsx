import React, { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";
import { Search } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

const Properties = () => {
  //  State for search input
  const [searchTerm, setSearchTerm] = useState("");

  //  State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6; // Number of properties per page

  //  Filtering properties based on search input
  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  Pagination logic
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  //  Calculate total number of pages
  const pageCount = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <div className="p-6">
      {/* Page Header with Search Bar & User Avatar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white hidden sm:block">
          Properties
        </h2>

        {/* Search Bar */}
        <div className="relative flex gap-4 items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/*User Profile Button */}
        <UserButton />
      </div>

      {/* Properties Grid with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {currentProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Buttons (Only if multiple pages exist) */}
      {pageCount > 1 && (
        <div className="flex justify-center mt-8">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-4 py-2 rounded-lg transition-all 
                ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
