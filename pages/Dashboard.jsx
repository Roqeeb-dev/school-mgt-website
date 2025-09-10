import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SecondSidebar from "../components/Sidebar-2";
import MainContent from "../components/MainContent";

export default function Dashboard() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex h-screen">
        <SecondSidebar />
        <MainContent />
      </div>
    </main>
  );
}
