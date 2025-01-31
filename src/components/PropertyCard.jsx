import React from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Square } from "lucide-react";

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} //  Initial animation (fade-in from below)
      animate={{ opacity: 1, y: 0 }} //  Animation when component mounts
      whileHover={{ scale: 1.02 }} //  Slight scale-up effect on hover
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      {/*Property Image */}
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />

      {/* Property Details */}
      <div className="p-4">
        {/* Property Name */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {property.name}
        </h3>

        {/*Location */}
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          {property.location}
        </p>

        {/* Price */}
        <p className="text-2xl font-bold text-blue-500 mb-4">
          ${property.price.toLocaleString()} {/* ✅ Format price with commas */}
        </p>

        {/*  Property Features */}
        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          {/*  Bedrooms */}
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.beds} beds</span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.baths} baths</span>
          </div>

          {/*Square Footage */}
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
