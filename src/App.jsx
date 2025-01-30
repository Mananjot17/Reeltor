import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-100  dark "></main>
    </div>
  );
}

export default App;
