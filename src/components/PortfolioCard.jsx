import React from "react";

const PortfolioCard = ({ name, value }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg min-w-[200px]">
    <p className="text-gray-600 dark:text-gray-400">{name}</p>
    <p className="text-lg font-bold text-blue-500">{value}</p>
  </div>
);

export default PortfolioCard;
