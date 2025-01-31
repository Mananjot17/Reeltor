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
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import AuthPage from "./AuthPage";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <SignedOut>
        <AuthPage />
      </SignedOut>
      {/* Sidebar (Fixed) */}

      <SignedIn>
        <div className={`flex h-screen ${isDarkMode ? "dark" : ""}`}>
          <div className="fixed h-full">
            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </div>

          {/* Main Content (Scrollable) */}
          <main className="flex-1 ml-20 bg-gray-100 dark:bg-gray-900 overflow-y-auto h-screen">
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
      </SignedIn>
    </div>
  );
}

export default App;
