import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Home, TrendingUp, Users, Search } from "lucide-react";
import StatCard from "./StatCard";
import PortfolioCard from "./PortfolioCard";
import NFTCard from "./NFTCard";
import SalesOverview from "./SalesOverview";
import { UserButton } from "@clerk/clerk-react"; // Clerk's authenticated user button

// Sample data for the sales chart
const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

// List of NFTs owned by the user
const nftsOwned = [
  { id: 1, name: "Roma Avenue", value: "0.91 Ether" },
  { id: 2, name: "Thorian Park", value: "0.89 Ether" },
  { id: 3, name: "Linda Mansion", value: "1.1 Ether" },
  { id: 4, name: "Villa Mary", value: "0.71 Ether" },
  { id: 5, name: "Golden Estate", value: "1.5 Ether" },
  { id: 6, name: "Skyline Towers", value: "2.3 Ether" },
];

// Portfolio holdings
const portfolio = [
  { id: 1, name: "Mandragora Mansion", value: "0.05 Ether" },
  { id: 2, name: "Halbert Avenue", value: "0.76 Ether" },
  { id: 3, name: "Pomera Estate", value: "1.2 Ether" },
];

// Dashboard statistics (Total properties, revenue, etc.)
const stats = [
  {
    title: "Total Properties",
    value: "2,345",
    icon: Home,
    color: "bg-blue-500",
  },
  {
    title: "Total Revenue",
    value: "$1.2M",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Active Listings",
    value: "156",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
  {
    title: "New Clients",
    value: "43",
    icon: Users,
    color: "bg-yellow-500",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      {/*Dashboard Header (Page Title + User Profile) */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Dashboard
        </h2>
        <UserButton /> {/* Clerk User Profile Button */}
      </div>

      {/* Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Section (Stats, Portfolio, Sales) */}
        <div className="lg:col-span-3">
          {/* 🔹 Statistics Cards (Total Properties, Revenue, etc.) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon; // Extracting the Lucide icon component
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard {...stat} /> {/* Reusable StatCard component */}
                </motion.div>
              );
            })}
          </div>

          {/* Portfolio Holdings Section */}
          <div className="mb-6 overflow-x-auto whitespace-nowrap">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              My Portfolio
            </h3>
            <div className="flex space-x-4">
              {portfolio.map((item) => (
                <PortfolioCard key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* Sales Overview Chart */}
          <SalesOverview data={data} />
        </div>

        {/* Right Section (NFTs Owned) */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            NFTs Owned
          </h3>
          <div className="space-y-4">
            {nftsOwned.map((nft) => (
              <NFTCard key={nft.id} {...nft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
