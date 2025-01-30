import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import Cart from "./components/Cart";
import Calender from "./components/Calender";
import Settings from "./components/Settings";
import Stats from "./components/Stats";
import Dashboard from "./components/Dashboard";
import Properties from "./components/Properties";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`flex min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeSection === "dashboard" && <Dashboard />}
            {activeSection === "properties" && <Properties />}
            {activeSection === "Cart" && <Cart />}
            {activeSection === "Calender" && <Calender />}
            {activeSection === "Stats" && <Stats />}
            {activeSection === "settings" && <Settings />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
