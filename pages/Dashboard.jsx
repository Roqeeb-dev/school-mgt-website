import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

export default function Dashboard() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </main>
  );
}
