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
  // State to manage active section in the sidebar
  const [activeSection, setActiveSection] = useState("dashboard");

  // State to manage dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode on/off
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      {/* Show Authentication Page if User is Signed Out */}
      <SignedOut>
        <AuthPage />
      </SignedOut>

      {/* Show Main App Layout when User is Signed In */}
      <SignedIn>
        {/* Main Layout with Sidebar (Fixed) and Main Content (Scrollable) */}
        <div className={`flex h-screen ${isDarkMode ? "dark" : ""}`}>
          {/* Sidebar component remains fixed */}
          <div className="fixed h-full">
            <Sidebar
              activeSection={activeSection} // Pass active section to Sidebar
              setActiveSection={setActiveSection} // Function to change active section
              isDarkMode={isDarkMode} // Pass current dark mode state
              toggleDarkMode={toggleDarkMode} // Pass function to toggle dark mode
            />
          </div>

          {/* Main Content area which is scrollable */}
          <main className="flex-1 ml-20 bg-gray-100 dark:bg-gray-900 overflow-y-auto h-screen">
            {/* Animate component for smooth transitions between sections */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection} // Ensure each section has a unique key for transitions
                initial={{ opacity: 0, x: 20 }} // Initial state for the animation
                animate={{ opacity: 1, x: 0 }} // Animation state when entering
                exit={{ opacity: 0, x: -20 }} // Animation state when exiting
                transition={{ duration: 0.2 }} // Transition duration
              >
                {/* Conditional Rendering for active sections */}
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
