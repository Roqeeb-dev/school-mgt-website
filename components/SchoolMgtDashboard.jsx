import { useState } from "react";
import { Search, Plus, Trash, Edit } from "lucide-react";

export default function SchoolMgtDashboard() {
  // State for sessions
  const [sessions, setSessions] = useState([
    {
      id: 1,
      level: "Accounting",
      startDate: "2025-09-01",
      endDate: "2025-10-01",
    },
    {
      id: 2,
      level: "Accounting",
      startDate: "2025-10-01",
      endDate: "2025-11-01",
    },
  ]);

  // Form state
  const [newSession, setNewSession] = useState({
    level: "",
    startDate: "",
    endDate: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSession((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle add session
  const handleAddSession = () => {
    if (!newSession.level || !newSession.startDate || !newSession.endDate) {
      alert("Please fill all fields");
      return;
    }

    setSessions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newSession,
      },
    ]);

    // Reset form
    setNewSession({
      level: "",
      startDate: "",
      endDate: "",
    });
  };

  // Handle delete session
  const handleDelete = (id) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  };

  return (
    <div className="lg:p-5">
      <section className="space-y-6">
        {/* Top filters row */}
        <div className="flex flex-wrap items-center gap-4">
          <select
            name="session"
            id="session"
            className="border border-gray-400 px-2 py-1 text-sm w-full sm:w-[200px] rounded-md"
          >
            <option value="">All Sessions</option>
            <option value="2022">2022 - 2023</option>
            <option value="2023">2023 - 2024</option>
            <option value="2024">2024 - 2025</option>
          </select>

          <div className="flex items-center justify-between border border-gray-400 px-2 py-1 w-full sm:w-[200px] rounded-md text-sm">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search sessions"
              className="placeholder:text-sm focus:outline-none w-full"
            />
            <Search className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* Sessions section */}
        <div className="flex flex-col">
          <p className="text-lg font-medium my-3">Sessions</p>

          {/* Inputs container */}
          <div className="flex flex-wrap gap-4">
            {/* Session level */}
            <input
              type="text"
              name="level"
              value={newSession.level}
              onChange={handleChange}
              placeholder="Enter Session Level"
              className="placeholder:text-sm focus:outline-none border border-gray-400 px-2 py-1 w-full sm:w-[200px] rounded-md text-sm"
            />

            {/* Start date */}
            <input
              type="date"
              name="startDate"
              value={newSession.startDate}
              onChange={handleChange}
              className="placeholder:text-sm focus:outline-none border border-gray-400 px-2 py-1 w-full sm:w-[200px] rounded-md text-sm"
            />

            {/* End date */}
            <input
              type="date"
              name="endDate"
              value={newSession.endDate}
              onChange={handleChange}
              className="placeholder:text-sm focus:outline-none border border-gray-400 px-2 py-1 w-full sm:w-[200px] rounded-md text-sm"
            />

            {/* Button */}
            <button
              type="button"
              onClick={handleAddSession}
              className="flex items-center justify-center gap-2 uppercase py-1 px-3 border border-yellow-500 text-sm font-medium rounded-md hover:bg-yellow-100 w-full sm:w-auto"
            >
              <Plus className="h-4 w-4" />
              Add New Session
            </button>
          </div>
        </div>
      </section>

      {/* Table part */}
      <section className="mt-5">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-sm text-gray-800 font-medium">
                <th className="p-3 text-left">S/No</th>
                <th className="p-3 text-left">Session Level</th>
                <th className="p-3 text-left">Start Date</th>
                <th className="p-3 text-left">End Date</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr
                  key={session.id}
                  className="text-sm text-gray-800 font-medium hover:bg-gray-50"
                >
                  <td className="p-5">{index + 1}</td>
                  <td className="p-3">{session.level}</td>
                  <td className="p-3">
                    {new Date(session.startDate).toLocaleDateString()}
                  </td>
                  <td className="p-3">
                    {new Date(session.endDate).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="flex items-center justify-start p-3 space-x-3">
                      <Trash
                        className="fill-yellow-500 h-5 w-5 cursor-pointer"
                        onClick={() => handleDelete(session.id)}
                      />
                      <Edit className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
