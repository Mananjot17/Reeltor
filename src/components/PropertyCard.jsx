import React from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Square } from "lucide-react";

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {property.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          {property.location}
        </p>
        <p className="text-2xl font-bold text-blue-500 mb-4">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
