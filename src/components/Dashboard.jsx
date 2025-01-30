import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Home, TrendingUp, Users } from "lucide-react";
import StatCard from "./StatCard";
import PortfolioCard from "./PortfolioCard";
import NFTCard from "./NFTCard";
import SalesOverview from "./SalesOverview";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

const nftsOwned = [
  { id: 1, name: "Roma Avenue", value: "0.91 Ether" },
  { id: 2, name: "Thorian Park", value: "0.89 Ether" },
  { id: 3, name: "Linda Mansion", value: "1.1 Ether" },
  { id: 4, name: "Villa Mary", value: "0.71 Ether" },
  { id: 5, name: "Golden Estate", value: "1.5 Ether" },
  { id: 6, name: "Skyline Towers", value: "2.3 Ether" },
];

const portfolio = [
  { id: 1, name: "Mandragora Mansion", value: "0.05 Ether" },
  { id: 2, name: "Halbert Avenue", value: "0.76 Ether" },
  { id: 3, name: "Pomera Estate", value: "1.2 Ether" },
];

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
    <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Dashboard Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            );
          })}
        </div>

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

        <SalesOverview data={data} />
      </div>

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
  );
};

export default Dashboard;
