import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SecondSidebar from "../components/Sidebar-2";
import MainContent from "../components/MainContent";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="flex flex-col h-screen">
      {/* Navbar at top */}
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Content area takes remaining height */}
      <div className="flex flex-1 overflow-hidden">
        <SecondSidebar
          sidebarOpen={sidebarOpen}
          onCloseSidebar={() => setSidebarOpen(false)}
        />
        <MainContent />
      </div>
    </main>
  );
}
